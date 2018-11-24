

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { AuthenticationService } from '../../services/auth.service';

declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent{ 
  public infoModal;
  public loginModel:Login = new Login();

  constructor(public router: Router, public authService:AuthenticationService){ 

  }
  showLoginModal(){
    jQuery('#openLoginModal').trigger('click');
  }
  login(){
    jQuery('.closeLoginModalClass').trigger('click');
    
    this.router.navigateByUrl('home');
    /* 
    this.authService.authenticateUser(this.loginModel).subscribe(
      (response:any) => {
        console.info("Response"+response);
        jQuery('#closeLoginModal').trigger('click');
        this.router.navigateByUrl('home');
      },
      (error) => {
        console.log(error);
          
      }
    ) */


    
  }

  
}
