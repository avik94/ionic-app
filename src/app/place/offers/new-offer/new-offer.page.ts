import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  newOfferForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newOfferForm = new FormGroup({
      title: new FormControl(null, {validators : Validators.required}),
      description: new FormControl(null, {validators: Validators.required}),
      price: new FormControl(null, {validators: Validators.required}),
      toDate: new FormControl(null, {validators: Validators.required}),
      formDate: new FormControl(null, {validators: Validators.required})
    });
  }

  submitForm() {
    console.log(this.newOfferForm.value);
  }



}
