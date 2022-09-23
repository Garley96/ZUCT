import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentEditComponent } from './enrollment-edit.component';
import { EnrollmentEditRoutingModule } from './enrollment-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EnrollmentEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EnrollmentEditComponent
  ]
})
export class EnrollmentEditModule { }
