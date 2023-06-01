import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterForm2Page } from './register-form2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterForm2PageRoutingModule {}
