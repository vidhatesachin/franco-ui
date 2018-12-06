import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { FormsModule } from '@angular/forms';
import { BranchRoutingModule } from './branch-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BranchRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [BranchComponent]
})
export class BranchModule { }
