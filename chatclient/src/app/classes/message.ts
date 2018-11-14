export class Message {
  user: string;
  timestamp: string;
  msg: string;
  mood: string;

  constructor(user: string, timestamp: string, msg: string) {
    this.user = user;
    this.timestamp = timestamp;
    this.msg = msg;
  }
}
