// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CoursesService } from '../../services/courses.service';
import { ExamsService } from '../../services/exams.service';
import { LecturersService } from '../../services/lecturers.service';
import { StudentsService } from '../../services/students.service';
// Import Models
import { Courses } from '../../domain/zuct_db/courses';
import { Students } from '../../domain/zuct_db/students';
import { Lecturers } from '../../domain/zuct_db/lecturers';
import { Exams } from '../../domain/zuct_db/exams';

// START - USED SERVICES
/**
* coursesService.create
*	@description CRUD ACTION create
*
* coursesService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* coursesService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examsService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
* lecturersService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
* studentsService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Courses
 */
@Component({
    selector: 'app-courses-edit',
    templateUrl: 'courses-edit.component.html',
    styleUrls: ['courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {
    item: Courses;
    externalStudents__courses: Students[];
    externalLecturers__courses: Lecturers[];
    externalExams__courses: Exams[];
    model: Courses;
    formValid: Boolean;

    constructor(
    private coursesService: CoursesService,
    private examsService: ExamsService,
    private lecturersService: LecturersService,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Courses();
        this.externalStudents__courses = [];
        this.externalLecturers__courses = [];
        this.externalExams__courses = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.coursesService.get(id).subscribe(item => this.item = item);
                this.studentsService.findBy_courses(id).subscribe(list => this.externalStudents__courses = list);
                this.lecturersService.findBy_courses(id).subscribe(list => this.externalLecturers__courses = list);
                this.examsService.findBy_courses(id).subscribe(list => this.externalExams__courses = list);
            }
            // Get relations
        });
    }


    /**
     * Save Courses
     *
     * @param {boolean} formValid Form validity check
     * @param Courses item Courses to save
     */
    save(formValid: boolean, item: Courses): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.coursesService.update(item).subscribe(data => this.goBack());
            } else {
                this.coursesService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



