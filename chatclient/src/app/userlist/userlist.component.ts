import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  list = [];
  
  constructor(private service: ChatService) {
  }

  ngOnInit() {
    this.service.getListForComponent().subscribe((list) => {
      this.setListList(list);
    });
  }

  setListList(list) {
    this.list = list.split(";");
    this.list.pop();
  }
}
