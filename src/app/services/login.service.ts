import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/Login';
import {ConfigService} from './config.service';
import {User} from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient,
                private config: ConfigService) {
    }

    baseURL = this.config.api;

    login(user: User) {
        console.log(user);
        return this.http.post(`${this.baseURL}/login`, user, {observe: 'response'});
    }

    getCurrentRole() {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', token);
        return this.http.get(`${this.baseURL}/user/currentRole`, {headers, responseType: 'text'});
    }
}
