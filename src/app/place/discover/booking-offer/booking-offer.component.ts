import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking-offer',
  templateUrl: './booking-offer.component.html',
  styleUrls: ['./booking-offer.component.scss'],
})
export class BookingOfferComponent implements OnInit {

  @Input() name: string;
  @Input() age: string;
  @Input() phone: string;
  @Input() reedem: string;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  modalClose() {
    this.modalCtrl.dismiss();
  }

}
