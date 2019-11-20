import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthPage} from './auth.page';

const routes: Routes = [
    {path: '', component: AuthPage, children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {
                path: 'login', children: [
                    {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)}
                ]
            },
            {
                path: 'register', children: [
                    {path: '', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
