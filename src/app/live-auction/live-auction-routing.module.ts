import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveAuctionPage } from './live-auction.page';

const routes: Routes = [
  {
    path: '',
    component: LiveAuctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveAuctionPageRoutingModule {}
