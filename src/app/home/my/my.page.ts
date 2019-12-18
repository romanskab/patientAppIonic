import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../models/Patient';
import {ConfigService} from '../../services/config.service';

@Component({
    selector: 'app-my',
    templateUrl: './my.page.html',
    styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {
    currentPatient: Patient = new Patient();
    pathToImage = '';

    constructor(private patientService: PatientService,
                private config: ConfigService) {
    }

    private baseURL = this.config.api;

    ngOnInit() {
        this.patientService.getCurrentPatient().subscribe(value => {
            console.log(value);
            this.currentPatient = value;
            if (this.currentPatient.image == null) {
                this.pathToImage = 'assets/images/photo_patient_default.jpg';
            } else {
                this.pathToImage = `${this.baseURL}/images/` + this.currentPatient.image;
            }
            this.patientService.currentPatientSubject.next(value);
        });
    }

}
