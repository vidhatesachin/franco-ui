import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './usercomponent/usercomponent.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { AddUserComponent } from './usercomponent/adduser.component';
import { EditUserComponent } from './usercomponent/edituser.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     UserRoutingModule,
     ButtonsModule.forRoot(), 
      MatTableModule,
     CdkTableModule,
     ModalModule.forRoot()
  ],
  declarations: [UserComponent,AddUserComponent,EditUserComponent]
})
export class UserModule { }
