import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { AddBranchComponent } from './branch/addbranch.component';
import { EditBranchComponent } from './branch/editbranch.component';

const routes: Routes = [
  {
    path: '',
    component: BranchComponent,
    data: {
      title: 'Branch'
    }
  },
  {
    path: 'add',
    component: AddBranchComponent,
    data: {
      title: 'Add Branch'
    }
  },
  {
    path: 'edit/:id',
    component: EditBranchComponent,
    data: {
      title: 'Edit Branch'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule {}
