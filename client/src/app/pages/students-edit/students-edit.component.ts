// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentsService } from '../../services/students.service';
import { ExamsService } from '../../services/exams.service';
import { CoursesService } from '../../services/courses.service';
// Import Models
import { Students } from '../../domain/zuct_db/students';
import { Courses } from '../../domain/zuct_db/courses';
import { Exams } from '../../domain/zuct_db/exams';

// START - USED SERVICES
/**
* studentsService.create
*	@description CRUD ACTION create
*
* studentsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* studentsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examsService.findBy_students
*	@description CRUD ACTION findBy_students
*	@param Objectid key Id of model to search for
*
* coursesService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Students
 */
@Component({
    selector: 'app-students-edit',
    templateUrl: 'students-edit.component.html',
    styleUrls: ['students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
    item: Students;
    list_courses: Courses[];
    externalExams__students: Exams[];
    model: Students;
    formValid: Boolean;

    constructor(
    private studentsService: StudentsService,
    private examsService: ExamsService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Students();
        this.externalExams__students = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentsService.get(id).subscribe(item => this.item = item);
                this.examsService.findBy_students(id).subscribe(list => this.externalExams__students = list);
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
     * Add Courses from Students
     *
     * @param {string} id Id of Courses to add in this.item._courses array
     */
    addCourses(id: string) {
        if (!this.item._courses)
            this.item._courses = [];
        this.item._courses.push(id);
    }

    /**
     * Remove an Courses from a Students
     *
     * @param {number} index Index of Courses in this.item._courses array
     */
    removeCourses(index: number) {
        this.item._courses.splice(index, 1);
    }

    /**
     * Save Students
     *
     * @param {boolean} formValid Form validity check
     * @param Students item Students to save
     */
    save(formValid: boolean, item: Students): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentsService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentsService.create(item).subscribe(data => this.goBack());
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



