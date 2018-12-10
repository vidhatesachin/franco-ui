import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { FormsModule } from '@angular/forms';
import { BranchRoutingModule } from './branch-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { AddBranchComponent } from './branch/addbranch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BranchRoutingModule,
    ButtonsModule.forRoot(),
    MatTableModule,
    CdkTableModule
  ],
  declarations: [BranchComponent,AddBranchComponent]
})
export class BranchModule { }
