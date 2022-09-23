import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LecturersService } from '../../services/lecturers.service';
// Import Models
import { Lecturers } from '../../domain/zuct_db/lecturers';

// START - USED SERVICES
/**
* lecturersService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* lecturersService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Lecturers
 * @class LecturersListComponent
 */
@Component({
    selector: 'app-lecturers-list',
    templateUrl: './lecturers-list.component.html',
    styleUrls: ['./lecturers-list.component.css']
})
export class LecturersListComponent implements OnInit {
    list: Lecturers[];
    search: any = {};
    idSelected: string;
    constructor(
        private lecturersService: LecturersService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.lecturersService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Lecturers to remove
     *
     * @param {string} id Id of the Lecturers to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Lecturers
     */
    deleteItem() {
        this.lecturersService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
