import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsListComponent } from './exams-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExamsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsListRoutingModule { }
