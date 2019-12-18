import {Component, OnInit} from '@angular/core';
import {Login} from '../../models/Login';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {User} from '../../models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userLog: User = new User();
    isError = false;

    constructor(private loginService: LoginService,
                private router: Router,
                private nativeStorage: NativeStorage) {
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
            // this.nativeStorage.setItem('token', {property: value.headers.get('Authorization')}).then(
            //     value11 => {
            //         console.log(value11);
            //         console.log('set item');
            //     }
            // );

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
