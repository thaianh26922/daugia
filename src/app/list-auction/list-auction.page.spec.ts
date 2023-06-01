import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAuctionPage } from './list-auction.page';

describe('ListAuctionPage', () => {
  let component: ListAuctionPage;
  let fixture: ComponentFixture<ListAuctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListAuctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
