import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './usercomponent/usercomponent.component';
import { UserRoutingModule } from './user-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     UserRoutingModule,
     ButtonsModule.forRoot()
  ],
  declarations: [UserComponent]
})
export class UserModule { }
