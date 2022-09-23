import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturersEditComponent } from './lecturers-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LecturersEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturersEditRoutingModule { }
