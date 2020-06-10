import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../places.model';
import { PlaceService } from '../Places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private placeSerive: PlaceService
    ) { }

  places: Place[];
  releventPlaces;
  loadedPlace;

  ngOnInit() {
    console.log('Discover Page ngOnInit');
    this.loadedPlace = this.placeSerive.getPlacesList().slice();
    this.releventPlaces = this.loadedPlace;
  }

  // openMenus() {
  //   this.menuCtrl.open('first');
  // }
  segmentChanged(event: CustomEvent) {
    console.log(event.detail.value);
    if (event.detail.value === 'allPlaces') {
      this.releventPlaces = this.loadedPlace;
    } else {
      this.releventPlaces = this.loadedPlace.filter((el) => {
        return el.userId !== 'abc';
      });
    }
  }

}
