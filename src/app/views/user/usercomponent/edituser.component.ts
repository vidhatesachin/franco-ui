import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.services';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Branch } from '../../../models/branch.model';
import { BranchesService } from '../../../services/branches.services';

declare var jQuery:any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class EditUserComponent implements OnInit,AfterViewInit {
   
  constructor(public router:Router, public userService:UserService,public toastr: ToastrManager,public branchService:BranchesService) { }
  public user:User=new User();
  public showValidEmail=false;    
  public showValidPhonenumber=false;
  public selectedBr:Branch=new Branch();
  public ngOnInit():void {
    
  }
  public ngAfterViewInit():void{
    this.getUserDetail(); 
  }
  cancelUser()
  {
    jQuery('.closeLoginModalClass').trigger('click');
    this.router.navigateByUrl('/users');
  }
  clearUser(){
   
    this.user.name="";
    this.user.email="";
    this.user.phonenumber="";
    
  }
  validateEmail(){
    
      if(this.user.email!=null && this.user.email!="")
      {
      
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let testResult:boolean= re.test(String(this.user.email).toLowerCase());
      /* alert (testResult);
    */   if(testResult){
        this.showValidEmail=false;
  
      }
      else
      {
        this.showValidEmail=true;
      }
  
    }
    
    }
    validatePhonenumber(){
      if( this.user.phonenumber!=null && this.user.phonenumber!="")
        {
        
        let re = /^-?[0-9]+(\.[0-9]*){0,1}$/;
        let testResult:boolean= re.test(String( this.user.phonenumber).toLowerCase());
        /* alert (testResult);
      */   if(testResult){
          this.showValidPhonenumber=false;
    
        }
        else
        {
          this.showValidPhonenumber=true;
        }
    
      }
    
    }
getUserDetail() {
  let that = this;
  let id:string;
  let url=window.location.hash;
  url= url.substring(url.lastIndexOf('/')+1);
  id=url;
  console.log(id); 
  this.userService.getUser(id).subscribe(
    (response:any) => {
      that.user = response.json();
      that.branchService.branches.forEach(element => {
          if(element.id == that.user.branch.id){
            that.selectedBr.id = element.id;
            that.selectedBr.branchname = element.branchname;
          }
      });
    },
    (error) => {
      console.log(error);
     
    }
  )
      }

      
  updateUser(){
    if(this.showValidEmail==false&&this.showValidPhonenumber==false){
    this.userService.updateUser(this.user).subscribe(
      (response:any) => {
        console.info("Response"+response);
        this.showSuccess();
         this.router.navigateByUrl('/users');
         
      },
      (error) => {
        console.log(error);
      }
    
    ) 
    console.log(this.user);
    }
    else{
      alert("Please enter valid email and phone number");
    }
  } 
  showSuccess() {
    this.toastr.successToastr('User Edited succefully', 'Congrats');
  }
  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.user.branch = new Branch();
    this.user.branch.id = value;
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
  
}
