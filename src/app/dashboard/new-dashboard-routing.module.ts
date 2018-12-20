import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { NewDashboardComponent } from './dashboard-component/new-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NewDashboardComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDashboardRoutingModule {}
