import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {TestResult} from '../models/TestResult';
import {Visit} from '../models/Visit';
import {Doctor} from '../models/Doctor';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private URLSavePatient = 'http://localhost:8080/save/patient';
    private URLGetCurrentPatient = 'http://localhost:8080/patient/current';
    private URLGetAllTestResults = 'http://localhost:8080/patient/testResults';
    private URLGetAllFinishedVisits = 'http://localhost:8080/patient/visits/finished';
    private URLGetSpecialities = 'http://localhost:8080/specialities';
    private URLGetDoctorsBySpeciality = 'http://localhost:8080/patient/doctors/spec';
    private URLGetFreeVisitToDoctor = 'http://localhost:8080/patient/freeVisitToDoctor';
    private URLRecordToDoctor = 'http://localhost:8080/patient/recordToDoctor';

    // @ts-ignore
    currentPatientSubject = new BehaviorSubject();

    constructor(private http: HttpClient) {
    }

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
