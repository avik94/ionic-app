import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../Places.service';
import { Place } from '../places.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(
    private placeService: PlaceService ) { }
  offerPlace: Place[];

  ngOnInit() {
    this.offerPlace = this.placeService.getPlacesList();
  }

}
