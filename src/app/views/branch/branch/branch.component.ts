import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  public branches:Branch[] =new Array;
  constructor(public branchService:BranchesService) { }
  public ngOnInit():void {
    this.getBranches();
  }
  getBranches(){
    let that = this;
    this.branchService.branchesService().subscribe(
      (response:any) => {
        that.branches = response.json();
               
      },
      (error) => {
        console.log(error);
       
      }
    )
    
  }

}
