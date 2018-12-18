import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';
import { ToastrManager } from 'ng6-toastr-notifications';

declare var jQuery:any;

@Component({
  selector: 'app-edit-branch',
  templateUrl: './editbranch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class EditBranchComponent implements OnInit {
   
  constructor(public router:Router, public branchService:BranchesService,public toastr: ToastrManager) { }
  public branch:Branch=new Branch();
  public showValidEmail=false;    
  public showValidPhonenumber=false;
  
  public ngOnInit():void {
    this.getBranchDetail(); 
  }
 
  cancelBranch()
  {
    jQuery('.closeLoginModalClass').trigger('click');
    this.router.navigateByUrl('/branches');
  }
  clearBranch(){
    this.branch.branchcode="";
    this.branch.branchname="";
    this.branch.email="";
    this.branch.phonenumber="";
    this.branch.branchadress="";

  }
  validateEmail(){
  if( this.branch.email!=null && this.branch.email!="")
    {
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testResult:boolean= re.test(String( this.branch.email).toLowerCase());
    /* alert (testResult);
  */   if(testResult){
      this.showValidEmail=false;

    }
    else
    {
      this.showValidEmail=true;
    }

  }
}
validatePhonenumber(){
  if( this.branch.phonenumber!=null && this.branch.phonenumber!="")
    {
    
    let re = /^-?[0-9]+(\.[0-9]*){0,1}$/;
    let testResult:boolean= re.test(String( this.branch.phonenumber).toLowerCase());
    /* alert (testResult);
  */   if(testResult){
      this.showValidPhonenumber=false;

    }
    else
    {
      this.showValidPhonenumber=true;
    }

  }

}
  getBranchDetail() {
  let that = this;
  let id:string;
  let url=window.location.hash;
  console.log(window.location.hash); 
  url= url.substring(url.lastIndexOf('/')+1);
  id=url;
  console.log(id); 
  this.branchService.getBranch(id).subscribe(
    (response:any) => {
      that.branch = response.json();
    },
    (error) => {
      console.log(error);
     
    }
  )
      }
  
   updateBranch(){
    if(this.showValidEmail==false&&this.showValidPhonenumber==false){
    this.branchService.updateBranch(this.branch).subscribe(
      (response:any) => {
        console.info("Response"+response);
        this.showSuccess();
         this.router.navigateByUrl('/branches');
         
      },
      (error) => {
        console.log(error);
      }
    
    ) 
    console.log(this.branch);
    }
    else{
      alert("Please enter valid email and phone number");
    }
  } 
  showSuccess() {
    this.toastr.successToastr('Branch Edited succefully', 'Congrats');
  }
 
  
}
