import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking-offer',
  templateUrl: './booking-offer.component.html',
  styleUrls: ['./booking-offer.component.scss'],
})
export class BookingOfferComponent implements OnInit {

  @Input() offerDetails;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    console.log(this.offerDetails);
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

}
