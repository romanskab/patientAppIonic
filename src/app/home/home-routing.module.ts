import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {path: '', component: HomePage, children: [
                {
                    path: 'visits',
                    loadChildren: () => import('../home/visits/visits.module').then(m => m.VisitsPageModule)
                },
                {
                    path: 'analyzes',
                    loadChildren: () => import('../home/analyzes/analyzes.module').then(m => m.AnalyzesPageModule)
                },
                {
                    path: 'record',
                    loadChildren: () => import('../home/record-to-doctor/record-to-doctor.module').then(m => m.RecordToDoctorPageModule)
                },
                {
                    path: 'my',
                    loadChildren: () => import('../home/my/my.module').then(m => m.MyPageModule)
                },
            {path: '', redirectTo: 'my', pathMatch: 'full'}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
