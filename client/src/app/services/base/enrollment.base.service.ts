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
 *  FOR CUSTOMIZE enrollmentBaseService PLEASE EDIT ../enrollment.service.ts
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
import { Enrollment } from '../../domain/zuct_db/enrollment';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../enrollment.service.ts
 */

/*
 * SCHEMA DB enrollment
 *
	{
		year_enrol: {
			type: 'Date',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class EnrollmentBaseService {

    contextUrl: string = environment.endpoint + '/enrollment';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * enrollmentService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Enrollment): Observable<Enrollment> {
        return this.http
            .post<Enrollment>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * enrollmentService.delete
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
    * enrollmentService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Enrollment> {
        return this.http
            .get<Enrollment>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * enrollmentService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Enrollment[]> {
        return this.http
            .get<Enrollment[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * enrollmentService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Enrollment): Observable<Enrollment> {
        return this.http
            .post<Enrollment>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
