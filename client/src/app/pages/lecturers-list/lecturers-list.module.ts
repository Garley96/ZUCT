import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersListComponent } from './lecturers-list.component';
import { LecturersListRoutingModule } from './lecturers-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LecturersListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LecturersListComponent
  ]
})
export class LecturersListModule { }
