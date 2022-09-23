// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LecturersService } from '../../services/lecturers.service';
import { ExamsService } from '../../services/exams.service';
import { CoursesService } from '../../services/courses.service';
// Import Models
import { Lecturers } from '../../domain/zuct_db/lecturers';
import { Courses } from '../../domain/zuct_db/courses';
import { Exams } from '../../domain/zuct_db/exams';

// START - USED SERVICES
/**
* lecturersService.create
*	@description CRUD ACTION create
*
* lecturersService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* lecturersService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examsService.findBy_lecturer
*	@description CRUD ACTION findBy_lecturer
*	@param Objectid key Id of model to search for
*
* coursesService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Lecturers
 */
@Component({
    selector: 'app-lecturers-edit',
    templateUrl: 'lecturers-edit.component.html',
    styleUrls: ['lecturers-edit.component.css']
})
export class LecturersEditComponent implements OnInit {
    item: Lecturers;
    list_courses: Courses[];
    externalExams__lecturer: Exams[];
    model: Lecturers;
    formValid: Boolean;

    constructor(
    private lecturersService: LecturersService,
    private examsService: ExamsService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Lecturers();
        this.externalExams__lecturer = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.lecturersService.get(id).subscribe(item => this.item = item);
                this.examsService.findBy_lecturer(id).subscribe(list => this.externalExams__lecturer = list);
            }
            // Get relations
            this.coursesService.list().subscribe(list => this.list_courses = list);
        });
    }

    /**
     * Check if an Courses is in  _courses
     *
     * @param {string} id Id of Courses to search
     * @returns {boolean} True if it is found
     */
    containCourses(id: string): boolean {
        if (!this.item._courses) return false;
        return this.item._courses.indexOf(id) !== -1;
    }

    /**
     * Add Courses from Lecturers
     *
     * @param {string} id Id of Courses to add in this.item._courses array
     */
    addCourses(id: string) {
        if (!this.item._courses)
            this.item._courses = [];
        this.item._courses.push(id);
    }

    /**
     * Remove an Courses from a Lecturers
     *
     * @param {number} index Index of Courses in this.item._courses array
     */
    removeCourses(index: number) {
        this.item._courses.splice(index, 1);
    }

    /**
     * Save Lecturers
     *
     * @param {boolean} formValid Form validity check
     * @param Lecturers item Lecturers to save
     */
    save(formValid: boolean, item: Lecturers): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.lecturersService.update(item).subscribe(data => this.goBack());
            } else {
                this.lecturersService.create(item).subscribe(data => this.goBack());
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



