import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentEditComponent } from './enrollment-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentEditRoutingModule { }
