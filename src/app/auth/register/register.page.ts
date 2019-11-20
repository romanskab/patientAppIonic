import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {Role} from '../../models/enums/Role';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    patient: Patient = new Patient();
    passValid;
    isError = false;
    isSuccess = false;

    constructor(private patientService: PatientService,
                private router: Router) {
    }

    ngOnInit() {
    }

    regForm() {
        this.patient.role = Role.ROLE_PATIENT;
        console.log(this.patient);
        this.patientService.save(this.patient).subscribe(value => {
            console.log(value);
            this.isError = false;
            this.isSuccess = true;
            this.navigateToExitWithTimeout();
        }, error1 => {
            this.isSuccess = false;
            this.isError = true;
        });
    }

    navigateToExitWithTimeout() {
        setTimeout(() => {
            this.router.navigate(['auth', 'login']);
        }, 2000);
    }
}
