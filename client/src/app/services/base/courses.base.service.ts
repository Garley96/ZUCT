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
 *  FOR CUSTOMIZE coursesBaseService PLEASE EDIT ../courses.service.ts
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
import { Courses } from '../../domain/zuct_db/courses';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../courses.service.ts
 */

/*
 * SCHEMA DB courses
 *
	{
		name: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_courses: [{
			type: Schema.ObjectId,
			ref : "students"
		}],
		_courses: [{
			type: Schema.ObjectId,
			ref : "lecturers"
		}],
		_courses: {
			type: Schema.ObjectId,
			ref : "exams"
		},
	}
 *
 */
@Injectable()
export class CoursesBaseService {

    contextUrl: string = environment.endpoint + '/courses';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * coursesService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Courses): Observable<Courses> {
        return this.http
            .post<Courses>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * coursesService.delete
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
    * coursesService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Courses> {
        return this.http
            .get<Courses>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * coursesService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Courses[]> {
        return this.http
            .get<Courses[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * coursesService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Courses): Observable<Courses> {
        return this.http
            .post<Courses>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
