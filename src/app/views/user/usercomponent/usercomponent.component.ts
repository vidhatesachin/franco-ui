import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.services';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class UserComponent implements OnInit {

  public users:UserService[] =new Array;

  constructor(public userService:UserService) { }

  public ngOnInit():void {
    this.getUsers();
  }
  getUsers(){
    let that = this;
    this.userService.userService().subscribe(
      (response:any) => {
        that.users = response.json();
        console.log(that.users);
               
      },
      (error) => {
        console.log(error);
       
      }
    )
    
  }

}
