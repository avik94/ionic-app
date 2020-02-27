import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookingPlace = [];
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookingPlace = this.bookingService.getAllBookings();
  }

}
