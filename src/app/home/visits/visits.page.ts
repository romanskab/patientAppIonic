import {Component, OnInit} from '@angular/core';
import {Visit} from '../../models/Visit';
import {PatientService} from '../../services/patient.service';

@Component({
    selector: 'app-visits',
    templateUrl: './visits.page.html',
    styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {
    visits: Visit[] = [];

    constructor(private patientService: PatientService) {
    }

    ngOnInit() {
        this.patientService.currentPatientSubject.subscribe(patient => {
            console.log(patient);
            this.patientService.getAllFinishedVisits(patient.id).subscribe(value => {
                console.log(value);
                this.visits = value;
            });
        });
    }

}
