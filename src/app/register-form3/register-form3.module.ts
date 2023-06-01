import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterForm3PageRoutingModule } from './register-form3-routing.module';

import { RegisterForm3Page } from './register-form3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterForm3PageRoutingModule
  ],
  declarations: [RegisterForm3Page]
})
export class RegisterForm3PageModule {}
