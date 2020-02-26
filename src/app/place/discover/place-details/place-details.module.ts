import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailsPageRoutingModule } from './place-details-routing.module';

import { PlaceDetailsPage } from './place-details.page';
import { BookingOfferComponent } from '../booking-offer/booking-offer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailsPageRoutingModule
  ],
  declarations: [PlaceDetailsPage, BookingOfferComponent],
  entryComponents: [BookingOfferComponent]
})
export class PlaceDetailsPageModule {}
