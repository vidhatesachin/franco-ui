import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-add-branch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class AddBranchComponent implements OnInit {
   
  constructor(public router:Router, public branchService:BranchesService) { }
  public branch:Branch = new Branch(); 
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  public ngOnInit():void {
  
  }
  saveBranch(){
    this.branchService.saveBranch(this.branch).subscribe(
      (response:any) => {
        console.info("Response"+response);
         this.router.navigateByUrl('/branches');
       
      },
      (error) => {
        console.log(error);
      }
    
    ) 
    console.log(this.branch);
  }
 
  
}
