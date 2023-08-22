import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList: UserModel[] = [];
  userForm: any;

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;
  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      Name: [""],
      Email: [""],
      Mobile: [""],
      Age: [""],
      id: [],
      isShowDob: false
    })
  }

  ngOnInit(): void {
    this.usersList.push({
      Name: "Aasif",
      Email: "aasif@gmail.com",
      Mobile: "9090909090",
      Age: 24,
      id: 1,
      isShowDob: false
    },
      {
        Name: "Ali",
        Email: "ali@gmail.com",
        Mobile: "9090909090",
        Age: 20,
        id: 2,
        isShowDob: false
      });

    // this.showList();
    AppComponent.getUsers();
  }

  SubmitForm() {
    let user = this.userForm.value;
    user.id = this.usersList.length + 1;
    this.usersList.push(user);
    this.userForm.reset();
    console.log(user);
  }

  generateUserId(user: UserModel) {
    debugger
    this.usersList.forEach(usr => {
      if (user.id == usr.id) {
        console.log(user.id)
        debugger
      }
      console.log(this.usersList.length + 1);
      return this.usersList.length + 1;
    });
  }


  ApplyStyles() {
    let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };
    return styles;
  }
  showDOB(event: any) {
    event.isShowDob = !event.isShowDob;
  }


}
