import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers,Http} from '@angular/http';
import { Login } from '../models/login.model';
  


@Injectable()
export class AuthenticationService {
 
  
  constructor(
    private http:Http
  ) { }

  authenticateUser(loginVO:Login){
    return this.http.post(environment.servicesURL+'login',loginVO);
  }
}
