import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent { 
  public infoModal;

  constructor(public router: Router){   
  }
  showLoginModal(){
    jQuery('#openLoginModal').trigger('click');
  }

  login(){
    jQuery('#closeLoginModal').trigger('click');
    this.router.navigateByUrl('dashboard');
  }
}
