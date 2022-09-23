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
 *  FOR CUSTOMIZE lecturersBaseService PLEASE EDIT ../lecturers.service.ts
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
import { Lecturers } from '../../domain/zuct_db/lecturers';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../lecturers.service.ts
 */

/*
 * SCHEMA DB lecturers
 *
	{
		first_name: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_courses: [{
			type: Schema.ObjectId,
			ref : "lecturers"
		}],
		_lecturer: {
			type: Schema.ObjectId,
			ref : "exams"
		},
	}
 *
 */
@Injectable()
export class LecturersBaseService {

    contextUrl: string = environment.endpoint + '/lecturers';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * lecturersService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Lecturers): Observable<Lecturers> {
        return this.http
            .post<Lecturers>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * lecturersService.delete
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
    * lecturersService.findBy_courses
    *   @description CRUD ACTION findBy_courses
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_courses(id: string): Observable<Lecturers[]> {
        return this.http
            .get<Lecturers[]>(this.contextUrl + '/findBy_courses/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * lecturersService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Lecturers> {
        return this.http
            .get<Lecturers>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * lecturersService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Lecturers[]> {
        return this.http
            .get<Lecturers[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * lecturersService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Lecturers): Observable<Lecturers> {
        return this.http
            .post<Lecturers>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}