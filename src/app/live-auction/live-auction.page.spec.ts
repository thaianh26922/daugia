import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveAuctionPage } from './live-auction.page';

describe('LiveAuctionPage', () => {
  let component: LiveAuctionPage;
  let fixture: ComponentFixture<LiveAuctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LiveAuctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
