import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsEditComponent } from './exams-edit.component';
import { ExamsEditRoutingModule } from './exams-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamsEditComponent
  ]
})
export class ExamsEditModule { }
