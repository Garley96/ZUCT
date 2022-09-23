import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturersListComponent } from './lecturers-list.component';

const routes: Routes = [
  {
    path: '',
    component: LecturersListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturersListRoutingModule { }
