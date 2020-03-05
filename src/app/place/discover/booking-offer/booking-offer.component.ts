import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-offer',
  templateUrl: './booking-offer.component.html',
  styleUrls: ['./booking-offer.component.scss'],
})
export class BookingOfferComponent implements OnInit {

  @Input() offerDetails;
  @Input() selectType;
  bookingFormSubmit;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    console.log(this.selectType);
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
    this.modalCtrl.dismiss();
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
