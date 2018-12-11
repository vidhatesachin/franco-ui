import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './usercomponent/usercomponent.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { AddUserComponent } from './usercomponent/adduser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     UserRoutingModule,
     ButtonsModule.forRoot(),  MatTableModule,
     CdkTableModule
  ],
  declarations: [UserComponent,AddUserComponent]
})
export class UserModule { }
