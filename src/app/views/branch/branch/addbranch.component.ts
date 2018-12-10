import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../services/branches.services';


@Component({
  selector: 'app-add-branch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class AddBranchComponent implements OnInit {
   
  constructor(public branchService:BranchesService) { }
  
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
  getBranches(){
    
    
  }

}
