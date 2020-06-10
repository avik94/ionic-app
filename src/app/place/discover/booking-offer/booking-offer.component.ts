import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { BookingService } from 'src/app/booking/booking.service';
import { Booking } from 'src/app/booking/booking.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking-offer',
  templateUrl: './booking-offer.component.html',
  styleUrls: ['./booking-offer.component.scss'],
})
export class BookingOfferComponent implements OnInit {

  @Input() offerDetails;
  @Input() selectType;
  bookingFormSubmit;

  constructor(
    private modalCtrl: ModalController,
    private bookingService: BookingService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    console.log(this.selectType);
    console.log(this.offerDetails);
    this.bookingFormSubmit = new FormGroup({
      firstName: new FormControl(null, {validators: [Validators.required]}),
      lastName: new FormControl(null, {validators: [Validators.required]}),
      noOfGuest: new FormControl(null, {validators: [Validators.required]}),
      formDate: new FormControl(null, {validators: [Validators.required]}),
      toDate: new FormControl(null, {validators: [Validators.required]}),
    });
    if (this.selectType === 'custom') {
      return;
    } else {
      const randomFormDate = new Date();
      const randomToDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
      this.bookingFormSubmit.patchValue({formDate: randomFormDate.getDay() + '-' + randomFormDate.getMonth() + '-' + randomFormDate.getFullYear()});
      this.bookingFormSubmit.patchValue({toDate: randomToDate.getDay() + '-' + randomToDate.getMonth() + '-' + randomToDate.getFullYear()});
    }
  }

  submitBookingForm() {
    console.log(this.bookingFormSubmit.value);
    const data: Booking = {
      id: Math.random().toString(),
      userId: 'u' + Math.random().toString(),
      placeId: this.offerDetails.id,
      placeTitle: this.offerDetails.name,
      numberOfGuest: this.bookingFormSubmit.value.noOfGuest,
      firstName: this.bookingFormSubmit.value.firstName,
      lastName: this.bookingFormSubmit.value.lastName,
      fromDate: this.bookingFormSubmit.value.formDate,
      toDate: this.bookingFormSubmit.value.toDate,
    };
    this.bookingService.addNewBooking(data);
    this.bookingService.bookingAction.next(this.bookingService.getAllBookings());
    setTimeout(async () => {
      this.modalCtrl.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Your Place Booked Succesfully',
        duration: 2000
      });
      toast.present();
    }, 2000);
  }

  dateValid() {
    const startDate = new Date(this.bookingFormSubmit.value.formDate);
    const endDate = new Date(this.bookingFormSubmit.value.toDate);
    return endDate > startDate;
  }


  modalClose() {
    this.modalCtrl.dismiss();
  }

}
