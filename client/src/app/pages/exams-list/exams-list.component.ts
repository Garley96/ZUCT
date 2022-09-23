import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExamsService } from '../../services/exams.service';
// Import Models
import { Exams } from '../../domain/zuct_db/exams';

// START - USED SERVICES
/**
* examsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* examsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Exams
 * @class ExamsListComponent
 */
@Component({
    selector: 'app-exams-list',
    templateUrl: './exams-list.component.html',
    styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {
    list: Exams[];
    search: any = {};
    idSelected: string;
    constructor(
        private examsService: ExamsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.examsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Exams to remove
     *
     * @param {string} id Id of the Exams to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Exams
     */
    deleteItem() {
        this.examsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
