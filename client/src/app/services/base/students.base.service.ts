/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE studentsBaseService PLEASE EDIT ../students.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Students } from '../../domain/zuct_db/students';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../students.service.ts
 */

/*
 * SCHEMA DB students
 *
	{
		address: {
			type: 'String'
		},
		dob: {
			type: 'Date'
		},
		first_name: {
			type: 'String',
			required : true
		},
		phone: {
			type: 'Number'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_courses: [{
			type: Schema.ObjectId,
			ref : "students"
		}],
		_students: {
			type: Schema.ObjectId,
			ref : "exams"
		},
	}
 *
 */
@Injectable()
export class StudentsBaseService {

    contextUrl: string = environment.endpoint + '/students';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * studentsService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Students): Observable<Students> {
        return this.http
            .post<Students>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * studentsService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * studentsService.findBy_courses
    *   @description CRUD ACTION findBy_courses
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_courses(id: string): Observable<Students[]> {
        return this.http
            .get<Students[]>(this.contextUrl + '/findBy_courses/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * studentsService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Students> {
        return this.http
            .get<Students>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * studentsService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Students[]> {
        return this.http
            .get<Students[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * studentsService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Students): Observable<Students> {
        return this.http
            .post<Students>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
