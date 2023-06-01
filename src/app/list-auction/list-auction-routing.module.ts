import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAuctionPage } from './list-auction.page';

const routes: Routes = [
  {
    path: '',
    component: ListAuctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAuctionPageRoutingModule {}
