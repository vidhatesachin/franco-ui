import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.services';

declare var jQuery:any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class EditUserComponent implements OnInit {
   
  constructor(public router:Router, public userService:UserService) { }
  public user:User=new User();
  public showValidEmail=false;    
  public showValidPhonenumber=false;
  
  public ngOnInit():void {
    //this.getUserDetail(); 
  }
 /*  cancelUser()
  {
    jQuery('.closeLoginModalClass').trigger('click');
    this.router.navigateByUrl('/users');
  }
  clearUser(){
   
    this.user.name="";
    this.user.email="";
    this.user.phonenumber="";
    
  } */
 /*  validateEmail(){
    
      if(this.user.email!=null && this.user.email!="")
      {
      
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let testResult:boolean= re.test(String(this.user.email).toLowerCase());
      /* alert (testResult);
    */  /*  if(testResult){
        this.showValidEmail=false;
  
      }
      else
      {
        this.showValidEmail=true;
      }
  
    } */
    
   /*  } 
    validatePhonenumber(){
      if( this.user.phonenumber!=null && this.user.phonenumber!="")
        {
        
        let re = /^-?[0-9]+(\.[0-9]*){0,1}$/;
        let testResult:boolean= re.test(String( this.user.phonenumber).toLowerCase());
        /* alert (testResult);
      */   /* if(testResult){
          this.showValidPhonenumber=false;
    
        }
        else
        {
          this.showValidPhonenumber=true;
        }
    
      }
    
    } */ 
/* getUserDetail() {
  let that = this;
  let id:string;
  let url=window.location.hash;
  url= url.substring(url.lastIndexOf('/')+1);
  id=url;
  console.log(id); 
  this.userService.getUser(id).subscribe(
    (response:any) => {
      that.user = response.json();
    },
    (error) => {
      console.log(error);
     
    }
  )
      } */

  /*     
  updateUser(){
    if(this.showValidEmail==false&&this.showValidPhonenumber==false){
    this.userService.updateUser(this.user).subscribe(
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
    else{
      alert("Please enter valid email and phone number");
    }
  }  */
 
  
}
