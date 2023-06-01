import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterForm3Page } from './register-form3.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterForm3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterForm3PageRoutingModule {}
