import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers,Http} from '@angular/http';
import { Branch } from '../models/branch.model';
import { Observable } from 'rxjs';


  


@Injectable()
export class BranchesService {
  public selectedBranch:Branch = new Branch();
  public branches:Branch[] =new Array;
  constructor(private http:Http) {
    
  }

  branchesService(){
    return this.http.get(environment.servicesURL+'allbranches');
  }
  saveBranch(branchVO:Branch){
    return this.http.post(environment.servicesURL+'/addBranch',branchVO);
  }
  updateBranch(branchVO:Branch){
    return this.http.put(environment.servicesURL+'/updateBranch',branchVO);
  }
  getBranch(id:string){
    return this.http.get(environment.servicesURL+'/branches/'+id);
  }
  deleteBranch(id:string){
    return this.http.delete(environment.servicesURL+'deleteBranch/'+id);
  } 
} 