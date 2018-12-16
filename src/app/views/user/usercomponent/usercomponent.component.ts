import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.services';
import { User } from '../../../models/user.model';
import { MatTableDataSource } from '@angular/material';
declare var jQuery:any;
@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class UserComponent implements OnInit {

  public users:User[] = new Array();
  public dataSource;
  public deleteModal;
  public selectedBranchId;
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
  deleteUser(id:string){
    // alert("In Delete")

     id=this.selectedBranchId;
    //console.log("id="+id);
      this.userService.deleteUser(id).subscribe(
        (response:any)=> {
         this.getUsers();
         jQuery('#closeDeleteModal').trigger('click');
         alert("User delete");
       // this.router.navigateByUrl('/branches');
        },
  
      );
    }
 openModal(id:number){
  jQuery("#openDeleteModalBtn_"+id).trigger('click');
  this.selectedBranchId=id;
 // console.log("selectedBranchId="+this.selectedBranchId);
 
 }
  

}
