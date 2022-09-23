// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CoursesEditComponent} from './pages/courses-edit/courses-edit.component';
import { CoursesListComponent} from './pages/courses-list/courses-list.component';
import { EnrollmentEditComponent} from './pages/enrollment-edit/enrollment-edit.component';
import { EnrollmentListComponent} from './pages/enrollment-list/enrollment-list.component';
import { ExamsEditComponent} from './pages/exams-edit/exams-edit.component';
import { ExamsListComponent} from './pages/exams-list/exams-list.component';
import { LecturersEditComponent} from './pages/lecturers-edit/lecturers-edit.component';
import { LecturersListComponent} from './pages/lecturers-list/lecturers-list.component';
import { StudentsEditComponent} from './pages/students-edit/students-edit.component';
import { StudentsListComponent} from './pages/students-list/students-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'courseses/:id',  loadChildren: './pages/courses-edit/courses-edit.module#CoursesEditModule' , canActivate: [AuthGuard] },
    { path: 'courseses',  loadChildren: './pages/courses-list/courses-list.module#CoursesListModule' , canActivate: [AuthGuard] },
    { path: 'enrollments/:id',  loadChildren: './pages/enrollment-edit/enrollment-edit.module#EnrollmentEditModule' , canActivate: [AuthGuard] },
    { path: 'enrollments',  loadChildren: './pages/enrollment-list/enrollment-list.module#EnrollmentListModule' , canActivate: [AuthGuard] },
    { path: 'examses/:id',  loadChildren: './pages/exams-edit/exams-edit.module#ExamsEditModule' , canActivate: [AuthGuard] },
    { path: 'examses',  loadChildren: './pages/exams-list/exams-list.module#ExamsListModule' , canActivate: [AuthGuard] },
    { path: 'lecturerses/:id',  loadChildren: './pages/lecturers-edit/lecturers-edit.module#LecturersEditModule' , canActivate: [AuthGuard] },
    { path: 'lecturerses',  loadChildren: './pages/lecturers-list/lecturers-list.module#LecturersListModule' , canActivate: [AuthGuard] },
    { path: 'studentses/:id',  loadChildren: './pages/students-edit/students-edit.module#StudentsEditModule' , canActivate: [AuthGuard] },
    { path: 'studentses',  loadChildren: './pages/students-list/students-list.module#StudentsListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
