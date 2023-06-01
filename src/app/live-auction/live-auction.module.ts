import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveAuctionPageRoutingModule } from './live-auction-routing.module';

import { LiveAuctionPage } from './live-auction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveAuctionPageRoutingModule
  ],
  declarations: [LiveAuctionPage]
})
export class LiveAuctionPageModule {}
