import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersEditComponent } from './lecturers-edit.component';
import { LecturersEditRoutingModule } from './lecturers-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LecturersEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LecturersEditComponent
  ]
})
export class LecturersEditModule { }
