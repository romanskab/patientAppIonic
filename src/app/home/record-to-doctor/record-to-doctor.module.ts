import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordToDoctorPageRoutingModule } from './record-to-doctor-routing.module';

import { RecordToDoctorPage } from './record-to-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordToDoctorPageRoutingModule
  ],
  declarations: [RecordToDoctorPage]
})
export class RecordToDoctorPageModule {}
