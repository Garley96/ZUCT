import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentListComponent } from './enrollment-list.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentListRoutingModule { }
