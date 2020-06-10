import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    public bookingAction = new Subject();
    private bookingList: Booking[] = [
        {
            id: '1',
            placeId: 'p1',
            placeTitle: 'Manhatan House',
            userId: 'u1',
            numberOfGuest: '6',
            firstName: 'Tony',
            lastName: 'Stark',
            fromDate: '10-2-2020',
            toDate: '11-2-2020'
        }
    ];

    public getAllBookings() {
        return this.bookingList;
    }

    public addNewBooking(data: Booking) {
        this.bookingList.push(data);
    }
}
