import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PlaceService } from '../Places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private placesService: PlaceService
    ) { }

  places: Place[];

  ngOnInit() {
    this.places = this.placesService.getPlacesList();
  }

  openMenus() {
    this.menuCtrl.open('first');
  }
  segmentChanged(val) {
    console.log(val.detail.value);
  }

}
