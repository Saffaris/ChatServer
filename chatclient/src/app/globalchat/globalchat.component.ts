import { Component, OnInit} from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { Message } from '../classes/message';
import { MoodService } from '../mood.service';

@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.css']
})
export class GlobalchatComponent implements OnInit {
  

  public displayMessages: Message[] = [];
  
  username: string = localStorage.getItem('username');

  //moodservice: MoodService;

  chat: string= 'global';

  constructor(private router: Router, private chatservice: ChatService) {
    //this.moodservice = new MoodService();
  }

  /**
   * checks valid session and joins user to global chat
   * subscribes to chat service to get updates on messages
   */
  ngOnInit() {
    if(this.username == null || this.username == undefined) {
    }
    this.chatservice.join(this.chat);
    this.chatservice.getMessages().subscribe((message) => {
      console.log(message.msg)
      var m = new Message(message.user, message.timestamp, message.message);
      this.displayMessages.push(m);
    });
  }

  sendMessage($event) {
    var input = $event;
    if(input == "\\list"){
      this.chatservice.getList();
    } else if(input.split(' ')[0] == "\\whisper") {
      var data = input.split(' ');
      if(data.length >= 3) {
        var user = data[1];
        var msg = "";
        for (let index = 2; index < data.length; index++) {
          msg += data[index] + " "; 
        }
        this.chatservice.whisper(user, msg);
      }
    }else {
      this.chatservice.sendMessage(input);
    }
  }
 

  /**
   * Handles file inputs TODO
   */
  onChange(event) {
    var filename = event.target.value.split('\\')[event.target.value.split('\\').length - 1];
  }

}
