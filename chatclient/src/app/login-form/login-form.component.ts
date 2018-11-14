import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  regex: string = '^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$';
  invalidInput= "Only number, letters, and - or _";

  inputWarning: string = "";
  username: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    if(this.valid(this.username)) {
      this.redirect();
    } else {
      this.inputWarning = this.invalidInput;
    }
  }

  valid(name:string): boolean {
    var regex = new RegExp(this.regex);
    return regex.test(name) && this.username.length<=13&&this.username.length>=4;
  }

  redirect(): void {
    localStorage.setItem('username', this.username)
    this.router.navigate(['/chat']);
  }
}
