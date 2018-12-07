import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { Branch } from '../../models/branch.model';
import { BranchesService } from '../../services/branches.services';
declare var jQuery:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  public allowSelectBranch = false;
  
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public branches:Branch[] =new Array;
   constructor(public branchService:BranchesService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  public ngOnInit():void {
   
    this.getBranches();
  }
  getBranches(){
    let that = this;
    this.branchService.branchesService().subscribe(
      (response:any) => {
        that.branches = response.json();
        console.log(that.branches);
        if(that.branchService.selectedBranch==null){
          that.branchService.selectedBranch = that.branches[0];
        }
      },
      (error) => {
        console.log(error);
        //this.ngProgress.done();
      }
    )
    
  }
  public enableDropDown(){
    this.allowSelectBranch = true;
    setTimeout(function(){
      jQuery(".branchesDropDown ngx-select i.caret").trigger('click');
      
    },100);
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
    let that = this;
    this.allowSelectBranch = false;
    this.branches.forEach(element => {
      if(element.id ==value){
        that.branchService.selectedBranch = element;
      }
    });
 }

 public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
}
