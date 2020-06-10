import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookingPlace = [];
  bookingActionStrem;

  bookingNumber: any;
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookingPlace = this.bookingService.getAllBookings();
    this.bookingActionStrem = this.bookingService.bookingAction.subscribe((data) => {
      console.log(data);
    });
    console.log('Booking Page ngOnInit');
  }

  // ionViewWillEnter() {
  //   console.log('Enter Booking Page');
  // }

  // ionViewDidLeave() {
  //   console.log('Leave Booking Page');
  // }

  // ngOnDestroy() {
  //   this.bookingActionStrem.unsubscribe();
  // }
}
