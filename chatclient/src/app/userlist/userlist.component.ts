import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  list: User[] = [];
  
  constructor(private service: ChatService) {
  }

  ngOnInit() {
    this.service.getListForComponent().subscribe((list) => {
      this.setListList(list);
    });
    this.service.getUserPics().subscribe((info) => {
      this.list.forEach(element => {
        if(element.name == info.user && info.file!=null) {
          element.image = info.file;
        }
      });
    })
  }

  setListList(list) {
    this.list = list.split(";");

    this.list.pop();
  }
}
