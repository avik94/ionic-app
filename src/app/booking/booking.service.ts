import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private bookingList: Booking[] = [
        {
            id: '1',
            placeId: 'p1',
            placeTitle: 'Manhatan House',
            userId: 'u1',
            numberOfGuest: '6'
        }
    ];

    public getAllBookings() {
        return [...this.bookingList];
    }
}
