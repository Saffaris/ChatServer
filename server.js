var databaseDummy = [{user: "aaaa", pass: "a", mood: true, file: null}, {user: "bbbb", pass: "b", mood: false, file:null}];

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-11-28',
  iam_apikey: 'U3PVlQAjoK5qBRbADy2ldZ4th_T6HVk_RiuaitGTYIns'
});

const file = require('file-system');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);
const port = process.env.PORT || 3000;
const moment = require('moment');
var path = require('path');
var fu = require('socketio-file-upload');

app.use(fu.router);
app.use(express.static(__dirname));


app.get('*', function(req, res) {
  res.redirect(__dirname+'/client/index.html');
});

//socket data
//  validchatsession: boolean
io.on('connection', (socket) => {

  console.log(socket.id);
  socket.validchatsession = false; //needs login
  var uploader = new fu();
  uploader.dir = "./tempfile/";
  uploader.listen(socket);

  uploader.on("saved", function(event){
    console.log("Saved file: " + event.file.pathName);
    socket.file = event.file;
  })

  /**
   * Triggered on login-form submission
   * signindata = {user: string, pass: string}
   * result = {code: number, message: string}
   * codes
   * 0 = default (should not happen)
   * 1 = logged in
   * 2 = valid input but no matched user
   * 3 = valid user only
   * 4 = valid pass only
   */
  socket.on('signin', function(signindata) {
    console.log("Signin request: " + JSON.stringify(signindata));

    var result = {code: 0, message: "Default"};
    var user = signindata.user;
    var pass = signindata.pass;
    
    var validation = validUserAndPass(user, pass);
    if(validation.validpass && validation.validuser) {
      result.code = 2;
      result.message = "Valid Input";
      var i = 0;
      while(i < databaseDummy.length && !socket.validchatsession) {
        socket.validchatsession = (user == databaseDummy[i].user && pass == databaseDummy[i].pass);
        if(socket.validchatsession) {
          result.code = 1;
          result.message += ", logged in";
          socket.nickname = user;
        }
        i++;
      }
    } else if(!validation.validpass && !validation.validuser) {
      result.code = 5;
      result.message = "Invalid User And Pass";
    } else if(validation.validuser) {
      result.code = 3;
      result.message = "Invalid Password";
    } else if(validation.validpass) {
      result.code = 4;
      result.message = "Invalid User";
    } 
    socket.emit('signinresult', result);

    console.log("Signin response: " + JSON.stringify(result)
      + ", for input: " + JSON.stringify(signindata) + "\n");
  })

  /**
   * Triggered on signin-form submission
   * signupdata = {user: string, pass: string, mood:bool}
   * codes
   * 0 = fail
   * 1 = success
   * @returns {code: number, user:string}
   */
  socket.on('signup', function(signupdata) {
    console.log("Signup request: " + JSON.stringify(signupdata));
    var valid = validUserAndPass(signupdata.user, signupdata.pass);
    var response = {code: 0, user:signupdata.user}
    if(valid.validpass && valid.validuser && socket.file.filevalidation) {
      signupdata.file = socket.file;
      databaseDummy.push(signupdata);
      console.log("Successfull sign up for: " + signupdata.user + " " + signupdata.pass + " " + signupdata.mood + " " +  signupdata.file.name)
      response.code = 1;
    }
    socket.emit('signupresult', response);
  })

  /**
   * 
   */
  socket.on('fileValidationResult', function() {
    result = {result: true}; //TODO false
    //user file path 
    //IBM blabla face blabla
    
    var filePath = socket.file.pathName;
    var imageFile = file.createReadStream(filePath);
    
    var params = {
      images_file: imageFile
    };

    visualRecognition.detectFaces(params, function(err, response) {
      if (err) { 
        console.log(err);
      } else {
        result.result = response.images[0].faces.length != 0;
        result.feedback = response;
        console.log("Result of picture validation '"+ socket.file.pathName + "': " + result.result + "\n" + JSON.stringify(response, null, 2))
        socket.emit('fileValidation', result);
        socket.file.filevalidation = result;
      }
    }); 
  })

  /**
   * emits message to all connected socket that you left
   */
  socket.on('disconnect', function(){
    
  })

  /**
   * same as disconnect
   */
  socket.on('leave', function(){
    socket.broadcast.emit('message', {timestamp: 'Server', user: 'Info', msg: socket.nickname + ' left!'})
  })

  /**
   * joins user to chatroom, emits info message to all users in that chat
   */
  socket.on('join', function(chat) {
    socket.join(chat);
    socket.userroom = chat;
    socket.broadcast.to(chat).emit('message', createMessage(1, socket.nickname)); //send msg to e1 in same chat
    io.emit('list', getAllUsersAsString());
    console.log(socket.nickname + ' joined room: ' + chat);
  })

  /**
   * removes user in chatroom (not used)
   */
  socket.on('leave', function(chat) {
    socket.leave(chat);
    io.emit('list', getAllUsersAsString());

    console.log(socket.nickname + ' left!');
  })

  /**
   * emits message to all users in same chat room
   */
  socket.on('message', function(message) {
    message = createMessage(3, socket.nickname, message)
    io.in(socket.userroom).emit('message', message);

    console.log("Message sent in room: " + socket.userroom + ", Message: " + JSON.stringify(message))
  })

  socket.on('whisper', function(info){
    console.log(socket.nickname + " whisper to " + info.user);
    findClientsSocket().forEach(element =>{
      if(element.nickname == info.user) {
        msg = {code: 2, timestamp: moment().format('hh:mm A'),user: socket.nickname + " whispers", msg: info.msg}
        element.emit('message', msg);
        socket.emit('message', msg);
        return;
      }
    })
  })

  /**
   * todo
   */
  socket.on('file', function() {
    console.log("file");
  })

  /**
   * emits list of all connected users to requester
   */
  socket.on('listmsg', function() {
    console.log(socket.nickname + ': list request');
    var users = "";
    findClientsSocket().forEach(element => {
      users += element.nickname +" ";
    });
    socket.emit('message', {timestamp: 'Server', user: 'Online Users', msg: users});
    console.log(users);
  })

});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

/**
 * returns all connected sockets
 * @param {} roomId (optional)
 * @param {*} namespace (optional)
 */
function findClientsSocket(roomId, namespace) {
  var res = []
  , ns = io.of(namespace ||"/");

  if (ns) {
      for (var id in ns.connected) {
          if(roomId) {
              var index = ns.connected[id].rooms.indexOf(roomId);
              if(index !== -1) {
                  res.push(ns.connected[id]);
              }
          } else {
              res.push(ns.connected[id]);
          }
      }
  }
  return res;
}

/**
 * Validates Username and Password
 * @returns JSON {validuser:bool, validpass:bool}
 * @param {*} user 
 * @param {*} pass 
 */
function validUserAndPass(user, pass) {
  //Regex for username and password
  const userregex = '^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$';
  const passregex = '^[A-Za-z0-9]+$';
  var result = {validuser: new RegExp(userregex).test(user)&&user.length >= 4&&user.length<=12
    , validpass: new RegExp(passregex).test(pass)};
  console.log("Input validation for: " + user + ", " + pass + " Result: " + JSON.stringify(result));
  return result;
}

var messageId = 0;
/**
 * types:
 * 0 = welcome message
 * 1 = join notification
 * 2 = leave notification
 * 3 = user message
 * @param {*} type 
 */
function createMessage(type, user, message) {
  result = {id: messageId, code: type, user: "Server", timestamp: moment().format('hh:mm A')};
  switch (type) {
    case 1:
    case 2:
      result.message = user + " has " + (type!=1?"joined!":"left!");
      break;
    case 3:
      result.message = message;
      result.user = user;
      break;
    default:
      break;
  }
  messageId++;
  return result;
}



function getAllUsersAsString() {
  var s = "";
  findClientsSocket().forEach(element => {
    if(element.nickname != undefined) {
      s+=element.nickname+";";
    }
  });
  return s;
}




require('dotenv').config({silent: true});

// Create the service wrapper
let toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
});

app.use(bodyParser.json());

app.use(express.static('public'));

function createToneRequest (request) {
  let toneChatRequest;

  if (request.texts) {
    toneChatRequest = {utterances: []};

    for (let i in request.texts) {
      let utterance = {text: request.texts[i]};
      toneChatRequest.utterances.push(utterance);
    }
  }

  return toneChatRequest;
}

function happyOrUnhappy (response) {
  const happyTones = ['satisfied', 'excited', 'polite', 'sympathetic'];
  const unhappyTones = ['sad', 'frustrated', 'impolite'];

  let happyValue = 0;
  let unhappyValue = 0;

  for (let i in response.utterances_tone) {
    let utteranceTones = response.utterances_tone[i].tones;
    for (let j in utteranceTones) {
      if (happyTones.includes(utteranceTones[j].tone_id)) {
        happyValue = happyValue + utteranceTones[j].score;
      }
      if (unhappyTones.includes(utteranceTones[j].tone_id)) {
        unhappyValue = unhappyValue + utteranceTones[j].score;
      }
    }
  }
  if (happyValue >= unhappyValue) {
    return 'happy';
  }
  else {
    return 'unhappy';
  }
}

/* Example 
{
  "texts": ["I do not like what I see", "I like very much what you have said."]
}
*/
app.post('/tone', (req, res, next) => {
  let toneRequest = createToneRequest(req.body);

  if (toneRequest) {
    toneAnalyzer.toneChat(toneRequest, (err, response) => {
      if (err) {
        return next(err);
      }
      let answer = {mood: happyOrUnhappy(response)};
      return res.json(answer);
    });
  }
  else {
    return res.status(400).send({error: 'Invalid Input'});
  }
});