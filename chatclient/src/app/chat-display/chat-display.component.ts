import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../classes/message';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  @Input() messages: Message[];

  constructor() {
  }

  ngOnInit() {
  }

}
