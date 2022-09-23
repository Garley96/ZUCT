import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentListComponent } from './enrollment-list.component';
import { EnrollmentListRoutingModule } from './enrollment-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EnrollmentListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EnrollmentListComponent
  ]
})
export class EnrollmentListModule { }
