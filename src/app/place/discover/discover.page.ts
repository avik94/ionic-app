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
  listOfLoadedPlace;

  ngOnInit() {
    this.places = this.placesService.getPlacesList();
    this.listOfLoadedPlace = this.places.slice(1);
    this.listOfLoadedPlace.push('');
  }

  openMenus() {
    this.menuCtrl.open('first');
  }

}
