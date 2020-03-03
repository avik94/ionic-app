import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitEditForm(formData: NgForm) {
    console.log(formData.value);
  }

}
