import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {Doctor} from '../../models/Doctor';
import {Visit} from '../../models/Visit';
import {Router} from '@angular/router';

@Component({
    selector: 'app-record-to-doctor',
    templateUrl: './record-to-doctor.page.html',
    styleUrls: ['./record-to-doctor.page.scss'],
})
export class RecordToDoctorPage implements OnInit {
    currentPatient: Patient;
    specialities;
    speciality;
    doctors: Doctor[];
    doctor: Doctor;
    freeVisits: Visit[];
    freeDays: Date[] = [];
    day;
    freeVisitsInSelectedDay: Visit[] = [];
    selectedVisit: Visit;
    isError = false;
    isSuccess = false;

    constructor(private patientService: PatientService,
                private router: Router) {
    }

    ngOnInit() {
        this.patientService.getCurrentPatient().subscribe(value => {
            console.log(value);
            this.currentPatient = value;
            this.patientService.getSpecialities().subscribe(value1 => {
                console.log(value1);
                this.specialities = value1;
            });
        });
    }

    getDoctorsBySpecialize() {
        this.isError = false;
        this.isSuccess = false;
        this.patientService.getDoctorsBySpeciality(this.speciality).subscribe(value => {
            console.log(value);
            this.doctors = value;

            this.doctor = null;
            this.freeDays = [];
            this.freeVisitsInSelectedDay = [];
        });
    }

    getFreeDaysToDoctor() {
        this.isError = false;
        this.isSuccess = false;
        this.patientService.getFreeVisitToDoctor(this.doctor.id).subscribe(value => {
                this.freeVisits = value;
                this.freeVisits.forEach(value1 => {
                    if (this.freeDays.indexOf(value1.date) === -1) {
                        this.freeDays.push(value1.date);
                    }
                });
                console.log(this.freeDays);

                this.day = null;
                this.freeVisitsInSelectedDay = [];
            }
        );
    }

    getFreeVisitsInSelectedDay() {
        this.isError = false;
        this.isSuccess = false;
        this.freeVisitsInSelectedDay = [];
        for (const visit of this.freeVisits) {
            if (visit.date === this.day) {
                this.freeVisitsInSelectedDay.push(visit);
            }
        }
        console.log(this.freeVisitsInSelectedDay);
        this.selectedVisit = null;
    }

    recordToDoctor() {
        this.patientService.recordToDoctor(this.selectedVisit.id, this.currentPatient.id).subscribe(value => {
            console.log(value);
            this.isSuccess = true;
            this.navigateToMyPageWithTimeout();
        }, error1 => {
            this.isError = true;
        });
    }

    navigateToMyPageWithTimeout() {
        setTimeout(() => {
            this.router.navigate(['home', 'my']);
        }, 2000);
    }

}
