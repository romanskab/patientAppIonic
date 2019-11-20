import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitsPageRoutingModule } from './visits-routing.module';

import { VisitsPage } from './visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitsPageRoutingModule
  ],
  declarations: [VisitsPage]
})
export class VisitsPageModule {}
