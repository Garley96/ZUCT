import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CoursesService } from '../../services/courses.service';
import { ExamsService } from '../../services/exams.service';
import { LecturersService } from '../../services/lecturers.service';
import { StudentsService } from '../../services/students.service';
// Import Models
import { Courses } from '../../domain/zuct_db/courses';

// START - USED SERVICES
/**
* coursesService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* coursesService.list
*	@description CRUD ACTION list
*
* coursesService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* coursesService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* coursesService.create
*	@description CRUD ACTION create
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
* coursesService.list
*	@description CRUD ACTION list
*
* coursesService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Courses
 * @class CoursesListComponent
 */
@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
    list: Courses[];
    search: any = {};
    idSelected: string;
    constructor(
        private coursesService: CoursesService,
        private examsService: ExamsService,
        private lecturersService: LecturersService,
        private studentsService: StudentsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.coursesService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Courses to remove
     *
     * @param {string} id Id of the Courses to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Courses
     */
    deleteItem() {
        this.coursesService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
