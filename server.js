const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);
const port = process.env.PORT || 3000;
const moment = require('moment');
var path = require('path');
app.use(express.static(__dirname));


app.all('/', function(req, res) {
  res.sendFile(__dirname+'/client/index.html')
});

io.on('connection', (socket, name) => {

  socket.nickname = name;
  /**
   * emits message to all connected socket that you left
   */
  socket.on('disconnect', function(){
    socket.broadcast.emit('message', {timestamp: 'Server', user: 'Info', msg: socket.nickname + ' left!'})
    console.log(socket.nickname + ' disconnected');
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
  socket.on('join', function(info) {
    socket.join(info.chat);
    socket.nickname = info.user;
    socket.broadcast.to(info.chat).emit('message', {timestamp: 'Server', user: 'Info', msg: socket.nickname + ' has joined!'}); //send msg to e1 in same chat
    socket.emit('message', {timestamp: "Server", user: "Info", msg:"Welcome "+ socket.nickname +"! Type \\help for available commands"});
    console.log(info.user + ' joined room: ' + info.chat + '!');
  })

  /**
   * removes user in chatroom (not used)
   */
  socket.on('leave', function(chat) {
    console.log(socket.nickname + ' left!');
    socket.leave(chat);
  })

  /**
   * emits message to all users in same chat room
   */
  socket.on('message', function(info) {
    io.in(info.chat).emit('message', {timestamp: moment().format('HH:mm') ,user: socket.nickname, msg: info.msg});
  })

  socket.on('whisper', function(info){
    console.log(socket.nickname + " whisper to " + info.user);
    findClientsSocket().forEach(element =>{
      if(element.nickname == info.user) {
        msg = {timestamp: moment().format('hh:mm A'),user: socket.nickname + " whispers", msg: info.msg}
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
  socket.on('list', function() {
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


let ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
let bodyParser = require('body-parser');

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