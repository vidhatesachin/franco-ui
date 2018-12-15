import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.services';
import { User } from '../../../models/user.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class UserComponent implements OnInit {

  public users:User[] = new Array();
  public dataSource;
  public displayedColumns: string[] =
   ['name','email','phonenumber','controlButtons'];

  constructor(public userService:UserService) { }

  public ngOnInit():void {
    this.getUsers();
  }
  getUsers(){
    let that = this;
    this.userService.userService().subscribe(
      (response:any) => {
        that.users = response.json();
        that.dataSource = new MatTableDataSource(that.users);
              
      },
      (error) => {
        console.log(error);
       
      }
    )
    
  }
  

}
