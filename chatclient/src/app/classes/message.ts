export class Message {
  user: string;
  timestamp: string;
  msg: string;
  mood: string;
  code: number;

  constructor(user: string, timestamp: string, msg: string, code: number) {
    this.user = user;
    this.timestamp = timestamp;
    this.msg = msg;
    this.code = code;
  }
}
