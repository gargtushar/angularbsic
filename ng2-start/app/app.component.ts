import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'] 
})
export class AppComponent {
  message: string = "Hello!";
  users: User[] =[
    { id: 25, name: 'Obito Uchiha', username: 'noone'},
    { id: 26, name: 'Sasuke Uchiha', username: 'sasuke'},
    { id: 27, name: 'Madara Uchiha', username: 'madara'},
    { id: 28, name: 'Itachi Uchiha', username: 'itachi'}
  ];
  activeUser: User;

  selectUser(user){
      if(this.activeUser === user ){
        this.activeUser = null;
      }
      else{
       this.activeUser = user;
      }  
  }
  onUserCreated(event){
   // console.log(event);
   this.users.push(event.user);
  }
}