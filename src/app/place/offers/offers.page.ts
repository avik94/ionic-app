import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from '../Places.service';
import { Place } from '../places.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {

  constructor(
    private placeService: PlaceService
  ) { }
  offerPlace;
  offerPlaceDataStream;

  ngOnInit() {
    console.log('offer page ngOnInit');
    this.offerPlace = this.placeService.getPlacesList();
    this.offerPlaceDataStream = this.placeService.placeAction.subscribe(data => {
      this.offerPlace = data;
    });
  }

  ionViewWillEnter() {
    console.log('Enter Offer Page');
  }

  ionViewDidLeave() {
    console.log('Leave Offer Page');
  }

  ngOnDestroy() {
    console.log('Destroy Offer Page');
    this.offerPlaceDataStream.unsubscribe();
  }

}
