// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { EnrollmentService } from '../../services/enrollment.service';
// Import Models
import { Enrollment } from '../../domain/zuct_db/enrollment';

// START - USED SERVICES
/**
* enrollmentService.create
*	@description CRUD ACTION create
*
* enrollmentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* enrollmentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Enrollment
 */
@Component({
    selector: 'app-enrollment-edit',
    templateUrl: 'enrollment-edit.component.html',
    styleUrls: ['enrollment-edit.component.css']
})
export class EnrollmentEditComponent implements OnInit {
    item: Enrollment;
    model: Enrollment;
    formValid: Boolean;

    constructor(
    private enrollmentService: EnrollmentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Enrollment();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.enrollmentService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Enrollment
     *
     * @param {boolean} formValid Form validity check
     * @param Enrollment item Enrollment to save
     */
    save(formValid: boolean, item: Enrollment): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.enrollmentService.update(item).subscribe(data => this.goBack());
            } else {
                this.enrollmentService.create(item).subscribe(data => this.goBack());
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



