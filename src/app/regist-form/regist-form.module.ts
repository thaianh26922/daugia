import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistFormPageRoutingModule } from './regist-form-routing.module';

import { RegistFormPage } from './regist-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistFormPageRoutingModule
  ],
  declarations: [RegistFormPage]
})
export class RegistFormPageModule {}
