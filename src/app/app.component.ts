import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nashtech';
  static users: any= [];

  static getUsers(){
    return this.users;
  }

  static setUsers(user: any) {
    this.users.push(user);
  }
}
