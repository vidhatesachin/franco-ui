import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BranchesService } from '../../../services/branches.services';
import { Branch } from '../../../models/branch.model';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

declare var jQuery:any;

@Component({
  selector: 'app-add-branch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class AddBranchComponent implements OnInit {
   
  constructor(public router:Router, public branchService:BranchesService,public toastr: ToastrManager) { 


  }
  public branch:Branch = new Branch(); 
  
  public showValidPhonenumber=false;
  public showValidEmail=false;

  public ngOnInit():void {
    
  }
  saveBranch(){
    let that = this;
    if(this.showValidEmail==false&&this.showValidPhonenumber==false){
    this.branchService.saveBranch(this.branch).subscribe(
      (response:any) => {
        console.info("Response"+response);
          this.router.navigateByUrl('/branches');
          this.showSuccess();
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
  /* validateUser(){
    if(this.branch.email==null||this.branch.email==""){
      this.showValidEmail=true;
     
      }
      else
      {
        this.showValidEmail=false;
      }
  } */
  validateEmail(){
    //this.validateUser();
  if( this.branch.email!=null && this.branch.email!="")
    {
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testResult:boolean= re.test(String( this.branch.email).toLowerCase());
    //alert (testResult);
    if(testResult){
      this.showValidEmail=false;

    }
    else
    {
      this.showValidEmail=true;
    }

  }
  else
    {
      this.showValidEmail=true;
    }
}
validatePhonenumber(){
  if( this.branch.phonenumber!=null && this.branch.phonenumber!="")
    {
    
    let re = /^-?[0-9]+(\.[0-9]*){0,1}$/;
    let testResult:boolean= re.test(String( this.branch.phonenumber).toLowerCase());
    
    if(testResult){
      this.showValidPhonenumber=false;

    }
    else
    {
      this.showValidPhonenumber=true;
    }

  }

}
showSuccess() {
  this.toastr.successToastr('Branch added succefully', 'Congrats');
}
  
}
