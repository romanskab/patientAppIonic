import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: Login) {
    console.log(user);
    return this.http.post('http://localhost:8080/login', user, {observe: 'response'});
  }

  getCurrentRole() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get('http://localhost:8080/user/currentRole', {headers, responseType: 'text'});
  }
}
