import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../models/Patient';

@Component({
    selector: 'app-my',
    templateUrl: './my.page.html',
    styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {
    currentPatient: Patient = new Patient();
    pathToImage;

    constructor(private patientService: PatientService) {
    }

    ngOnInit() {
        this.patientService.getCurrentPatient().subscribe(value => {
            console.log(value);
            this.currentPatient = value;
            this.patientService.currentPatientSubject.next(value);

            if (this.currentPatient.image === null) {
                this.pathToImage = 'assets/images/photo_patient_default.jpg';
            } else {
                this.pathToImage = 'http://localhost:8080/images/' + this.currentPatient.image;
            }

        });
    }

}
