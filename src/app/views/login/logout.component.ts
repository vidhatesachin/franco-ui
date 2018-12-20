import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.component.html'
})

export class LogoutComponent implements OnInit { 

  constructor(public router: Router){   
  }
  ngOnInit(){
    this.logout();
  }

  logout(){
    sessionStorage.removeItem("user");
    window.location.href = "";
  }
}
