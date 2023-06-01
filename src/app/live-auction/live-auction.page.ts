import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.page.html',
  styleUrls: ['./live-auction.page.scss'],
})
export class LiveAuctionPage implements OnInit {
  remainingTime: Observable<number>;
  private countdownSub: Subscription;
  constructor() { 
    this.remainingTime = new Observable<number>();
    this.countdownSub = new Subscription();

  }
  auctionEndDate: Date = new Date('2023-06-22'); // Ngày kết thúc cuộc đấu giá
  

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }
  startCountdown() {
    const endTime = moment(this.auctionEndDate);
    const currentTime = moment();

    const duration = moment.duration(endTime.diff(currentTime));
    let countdownSeconds = Math.floor(duration.asSeconds());

    this.remainingTime = timer(0, 1000).pipe(
      take(countdownSeconds),
      map(() => --countdownSeconds)
    );

    this.countdownSub = this.remainingTime.subscribe({
      complete: () => {
        // Xử lý khi đếm ngược hoàn thành
      }
    });
  }

  stopCountdown() {
    if (this.countdownSub) {
      this.countdownSub.unsubscribe();
    }
  }
  formatTime(seconds: unknown): string {
    const duration = moment.duration(seconds as number, 'seconds');
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const remainingSeconds = duration.seconds();

    return `${hours}:${minutes}: ${remainingSeconds}`;
  }
  getTimeRemaining() {
    const now = moment();
    const end = moment(this.auctionEndDate);

    const duration = moment.duration(end.diff(now));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const second = duration.seconds();
    return { days, hours, minutes , second };
  }
}
