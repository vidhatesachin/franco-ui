

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { AuthenticationService } from '../../services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent{ 
  public infoModal;
  public loginModel:Login = new Login();

  public showValiduser=false;
  public showValidPassword=false;
  public showValidEmail=false;

  constructor(public router: Router, public authService:AuthenticationService,public toastr: ToastrManager){ 

  }
  showLoginModal(){
    jQuery('#openLoginModal').trigger('click');
  }
  
  clearSearch(){
    this.loginModel.username="";
    this.loginModel.password="";
    this.showValidPassword=false;
      this.showValidEmail=false;
      this.showValiduser=false;
    
  }
  validateUser(){
    if(this.loginModel.username==null||this.loginModel.username==""){
      this.showValiduser=true;
      this.showValidEmail=false;
      }
      else
      {
        this.showValiduser=false;
      }
  }
  validatePassword(){
    if(this.loginModel.password==null|| this.loginModel.password==""){
      this.showValidPassword=true;
    }
    else
    {
      this.showValidPassword=false;
    } 
    //console.log(this.loginModel.username);{}
  }
  validateEmail(){
  this.validateUser();
    if(this.loginModel.username!=null && this.loginModel.username!="")
    {
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testResult:boolean= re.test(String(this.loginModel.username).toLowerCase());
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

   
  login(){
    if(this.showValiduser==false&& this.showValidEmail==false&& this.showValidPassword==false)
    {
    console.log(this.loginModel.username + " and "+ this.loginModel.password);
     this.authService.authenticateUser(this.loginModel).subscribe(
      (response:any) => {
        console.info("Response"+response);
        jQuery('#closeLoginModal').trigger('click');
        this.router.navigateByUrl('users');
        sessionStorage.setItem("user",response);

      },
      (error) => {
        console.log(error);
      }
    
    ) 
    }
    else {
      this.showDelete();
    }


    
  }
  showDelete() {
    this.toastr.errorToastr('Please Enter Valid Details', 'Error');
  }

  
}
