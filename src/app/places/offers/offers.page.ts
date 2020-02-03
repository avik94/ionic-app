import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Places } from '../places.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  placelist: Places[];

  constructor(
    private placesService: PlacesService,
    private menuCrtl: MenuController ) { }

  ngOnInit() {
    this.placelist = this.placesService.getAllPlaces();
  }

  test(item) {
    item.close();
  }

  // open() {
  //   this.menuCrtl.open('m1');
  // }

}
