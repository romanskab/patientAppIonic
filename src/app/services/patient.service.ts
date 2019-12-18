import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {TestResult} from '../models/TestResult';
import {Visit} from '../models/Visit';
import {Doctor} from '../models/Doctor';
import {ConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    constructor(private http: HttpClient,
                private config: ConfigService) {
    }

    private baseURL = this.config.api;
    private patientURL = this.config.api + '/patient';

    private URLSavePatient = `${this.baseURL}/save/patient`;
    private URLGetSpecialities = `${this.baseURL}/specialities`;
    private URLGetCurrentPatient = `${this.patientURL}/current`;
    private URLGetAllTestResults = `${this.patientURL}/testResults`;
    private URLGetAllFinishedVisits = `${this.patientURL}/visits/finished`;
    private URLGetDoctorsBySpeciality = `${this.patientURL}/doctors/spec`;
    private URLGetFreeVisitToDoctor = `${this.patientURL}/freeVisitToDoctor`;
    private URLRecordToDoctor = `${this.patientURL}/recordToDoctor`;

    // @ts-ignore
    currentPatientSubject = new BehaviorSubject();

    save(patient: Patient) {
        console.log(patient);
        return this.http.post<Patient>(this.URLSavePatient, patient);
    }

    getCurrentPatient() {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        return this.http.get<Patient>(this.URLGetCurrentPatient, {headers});
    }

    getAllTestResults(patientId): Observable<TestResult[]> {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        const URL = this.URLGetAllTestResults + `/${patientId}`;
        return this.http.get<TestResult[]>(URL, {headers});
    }

    getAllFinishedVisits(patientId): Observable<Visit[]> {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        const URL = this.URLGetAllFinishedVisits + `/${patientId}`;
        return this.http.get<Visit[]>(URL, {headers});
    }

    getSpecialities(): Observable<string[]> {
        return this.http.get<string[]>(this.URLGetSpecialities, {observe: 'body'});
    }

    getDoctorsBySpeciality(speciality): Observable<Doctor[]> {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        const URL = this.URLGetDoctorsBySpeciality + `/${speciality}`;
        return this.http.get<Doctor[]>(URL, {headers});
    }

    getFreeVisitToDoctor(doctorId): Observable<Visit[]> {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        const URL = this.URLGetFreeVisitToDoctor + `/${doctorId}`;
        return this.http.get<Visit[]>(URL, {headers});
    }

    recordToDoctor(visitId, patientId) {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        const URL = this.URLRecordToDoctor + `/${visitId}` + `/${patientId}`;
        return this.http.post(URL, null, {headers});
    }

}
