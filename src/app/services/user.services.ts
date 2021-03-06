import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers,Http} from '@angular/http';
import { User } from '../models/User.model';

@Injectable()
export class UserService {
  public selectedUser:User;
  
  constructor(private http:Http) {

  }

  userService(){
    return this.http.get(environment.servicesURL+'allusers');
  }
  saveUser(userVo:User)
  {
    return this.http.post(environment.servicesURL+'/addUser',userVo);
  }
  updateUser(userVo:User){
    return this.http.put(environment.servicesURL+'/updateUser',userVo);
  }
  getUser(id:string){
    return this.http.get(environment.servicesURL+'/user/'+id);
  }
  deleteUser(id:string){
    return this.http.delete(environment.servicesURL+'deleteUser/'+id);
  } 
  
  
}