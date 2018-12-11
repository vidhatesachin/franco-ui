import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.services';

declare var jQuery:any;

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class AddUserComponent implements OnInit {
   
  constructor(public router:Router, public userService:UserService) { }
  public user:User = new User();    
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  public ngOnInit():void {
  
  }
   saveUser(){
    this.userService.saveUser(this.user).subscribe(
      (response:any) => {
        console.info("Response"+response);
         this.router.navigateByUrl('/users');
         
      },
      (error) => {
        console.log(error);
      }
    
    ) 
    console.log(this.user);
  } 
 
  
}
