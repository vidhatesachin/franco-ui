import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { NewDashboardRoutingModule } from './new-dashboard-routing.module';
import { NewDashboardComponent } from './dashboard-component/new-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewDashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [NewDashboardComponent]
})
export class NewDashboardModule { }