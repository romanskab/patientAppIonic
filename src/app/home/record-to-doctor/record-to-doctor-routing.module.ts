import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordToDoctorPage } from './record-to-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: RecordToDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordToDoctorPageRoutingModule {}
