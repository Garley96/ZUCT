import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { EnrollmentService } from '../../services/enrollment.service';
// Import Models
import { Enrollment } from '../../domain/zuct_db/enrollment';

// START - USED SERVICES
/**
* enrollmentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* enrollmentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Enrollment
 * @class EnrollmentListComponent
 */
@Component({
    selector: 'app-enrollment-list',
    templateUrl: './enrollment-list.component.html',
    styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {
    list: Enrollment[];
    search: any = {};
    idSelected: string;
    constructor(
        private enrollmentService: EnrollmentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.enrollmentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Enrollment to remove
     *
     * @param {string} id Id of the Enrollment to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Enrollment
     */
    deleteItem() {
        this.enrollmentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
