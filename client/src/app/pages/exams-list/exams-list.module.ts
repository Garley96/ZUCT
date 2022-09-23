import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsListComponent } from './exams-list.component';
import { ExamsListRoutingModule } from './exams-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamsListComponent
  ]
})
export class ExamsListModule { }
