import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';
import { MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

declare var jQuery:any;
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  public branches:Branch[] = new Array();
  public dataSource;
  public deleteModal;
  public selectedBranchId;
  public displayedColumns: string[] =
   ['branchcode', 'branchname', 'email', 'phonenumber','branchadress','controlButtons'];
  constructor(public router:Router,public branchService:BranchesService) { }
  
  public ngOnInit():void {
    this.getBranches();
   
  }
  getBranches(){
    let that = this;
    this.branchService.branchesService().subscribe(
      (response:any) => {
        that.branches = response.json();
        that.dataSource = new MatTableDataSource(that.branches);
           console.log()    
      },
      (error) => {
        console.log(error);
       
      }
    )
    
  }/*  */
  deleteBranch(id:string){
    // alert("In Delete")

     id=this.selectedBranchId;
    //console.log("id="+id);
      this.branchService.deleteBranch(id).subscribe(
        (response:any)=> {
         this.getBranches();
         jQuery('#closeDeleteModal').trigger('click');
       // this.router.navigateByUrl('/branches');
        },
  
      );
    }
 openModal(id:number){
  jQuery("#openDeleteModalBtn_"+id).trigger('click');
  this.selectedBranchId=id;
 // console.log("selectedBranchId="+this.selectedBranchId);
 
 }


 
}
