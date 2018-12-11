import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers,Http} from '@angular/http';
import { Branch } from '../models/branch.model';


  


@Injectable()
export class BranchesService {
  public selectedBranch:Branch = new Branch();
  
  constructor(private http:Http) {
    
  }

  branchesService(){
    return this.http.get(environment.servicesURL+'allbranches');
  }
  saveBranch(branchVO:Branch){
    return this.http.post(environment.servicesURL+'/addBranch',branchVO);
  }
} 