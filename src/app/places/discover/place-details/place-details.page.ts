import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Places } from '../../places.model';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit, OnDestroy {

  place: Places;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.place = this.placesService.getOnePlace(data.get('placeId'));
    });

    console.log(this.place);
  }

  ngOnDestroy() {
    console.log('page-details destroy');
  }

}
