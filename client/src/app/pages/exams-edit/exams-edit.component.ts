// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ExamsService } from '../../services/exams.service';
import { CoursesService } from '../../services/courses.service';
import { StudentsService } from '../../services/students.service';
import { LecturersService } from '../../services/lecturers.service';
// Import Models
import { Exams } from '../../domain/zuct_db/exams';
import { Courses } from '../../domain/zuct_db/courses';
import { Lecturers } from '../../domain/zuct_db/lecturers';
import { Students } from '../../domain/zuct_db/students';

// START - USED SERVICES
/**
* examsService.create
*	@description CRUD ACTION create
*
* examsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* examsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* coursesService.list
*	@description CRUD ACTION list
*
* studentsService.list
*	@description CRUD ACTION list
*
* lecturersService.list
*	@description CRUD ACTION list
*
* examsService.validate
*	@description This API is used to validate the exam
*	@param String id is of the exam
*	@returns Boolean
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Exams
 */
@Component({
    selector: 'app-exams-edit',
    templateUrl: 'exams-edit.component.html',
    styleUrls: ['exams-edit.component.css']
})
export class ExamsEditComponent implements OnInit {
    item: Exams;
    list_courses: Courses[];
    list_lecturer: Lecturers[];
    list_students: Students[];
    model: Exams;
    formValid: Boolean;

    constructor(
    private examsService: ExamsService,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private lecturersService: LecturersService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Exams();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.coursesService.list().subscribe(list => this.list_courses = list);
            this.lecturersService.list().subscribe(list => this.list_lecturer = list);
            this.studentsService.list().subscribe(list => this.list_students = list);
        });
    }


    /**
     * Save Exams
     *
     * @param {boolean} formValid Form validity check
     * @param Exams item Exams to save
     */
    save(formValid: boolean, item: Exams): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examsService.update(item).subscribe(data => this.goBack());
            } else {
                this.examsService.create(item).subscribe(data => this.goBack());
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



