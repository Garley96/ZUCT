import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsEditComponent } from './exams-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExamsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsEditRoutingModule { }
