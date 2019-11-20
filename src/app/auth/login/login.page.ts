import {Component, OnInit} from '@angular/core';
import {Login} from '../../models/Login';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userLog: Login = new Login();
    isError = false;

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        this.isError = false;
    }

    logForm() {
        this.isError = false;
        console.log(this.userLog);
        this.loginService.login(this.userLog).subscribe(value => {
            console.log(value);
            localStorage.setItem('token', value.headers.get('Authorization'));
            this.loginService.getCurrentRole().subscribe(value1 => {
                console.log(value1);
                if (value1 === 'ROLE_PATIENT') {
                    this.router.navigate(['home']);
                } else {
                    localStorage.clear();
                    this.isError = true;
                }
            });
        }, error1 => {
            this.isError = true;
        });
    }

}
