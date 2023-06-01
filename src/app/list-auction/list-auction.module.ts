import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAuctionPageRoutingModule } from './list-auction-routing.module';

import { ListAuctionPage } from './list-auction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAuctionPageRoutingModule
  ],
  declarations: [ListAuctionPage]
})
export class ListAuctionPageModule {}
