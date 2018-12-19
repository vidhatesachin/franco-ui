import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.services';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';

declare var jQuery:any;

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class AddUserComponent implements OnInit {
   
  constructor(public router:Router, public userService:UserService,public toastr: ToastrManager,public branchService:BranchesService) { }
  public user:User = new User();
  public showValidEmail=false;    
  public showValidPhonenumber=false;
  public ngOnInit():void {
  
  }
   saveUser(){
    if(this.showValidEmail==false&&this.showValidPhonenumber==false){
    this.userService.saveUser(this.user).subscribe(
      (response:any) => {
        console.info("Response"+response);
         this.router.navigateByUrl('/users');
         this.showSuccess();
         
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
    showSuccess() {
      this.toastr.successToastr('User added succefully', 'Congrats');
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
