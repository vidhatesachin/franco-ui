import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './usercomponent/usercomponent.component';
import { AddUserComponent } from './usercomponent/adduser.component';
import { EditUserComponent } from './usercomponent/edituser.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: {
      title: 'User'
    }
  },
  {
    path: 'add',
    component: AddUserComponent,
    data: {
      title: 'Add User'
    }
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
    data: {
      title: 'Edit User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
