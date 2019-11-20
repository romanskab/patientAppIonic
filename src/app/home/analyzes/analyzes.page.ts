import {Component, OnInit} from '@angular/core';
import {TestResult} from '../../models/TestResult';
import {PatientService} from '../../services/patient.service';

@Component({
    selector: 'app-analyzes',
    templateUrl: './analyzes.page.html',
    styleUrls: ['./analyzes.page.scss'],
})
export class AnalyzesPage implements OnInit {
    results: TestResult[];

    constructor(private patientService: PatientService) {
    }

    ngOnInit() {
        this.patientService.currentPatientSubject.subscribe(patient => {
            console.log(patient);
            this.patientService.getAllTestResults(patient.id).subscribe(value => {
                this.results = value;
                console.log(this.results);
            });
        });
    }

}
