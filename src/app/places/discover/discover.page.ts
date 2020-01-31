import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Places } from '../places.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  places: Places[];

  constructor(
    private placeService: PlacesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.places = this.placeService.getAllPlaces();
  }

  getPlaceDetails(id) {
    this.router.navigate(['./', 'place-details', id], { relativeTo: this.route });
  }

}
