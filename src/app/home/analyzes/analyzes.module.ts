import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalyzesPageRoutingModule } from './analyzes-routing.module';

import { AnalyzesPage } from './analyzes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyzesPageRoutingModule
  ],
  declarations: [AnalyzesPage]
})
export class AnalyzesPageModule {}
