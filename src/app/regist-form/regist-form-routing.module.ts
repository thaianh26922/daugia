import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistFormPage } from './regist-form.page';

const routes: Routes = [
  {
    path: '',
    component: RegistFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistFormPageRoutingModule {}
