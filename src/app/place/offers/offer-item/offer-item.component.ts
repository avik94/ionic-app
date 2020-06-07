import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {

  @Input() offer;

  constructor() { }

  ngOnInit() {}

  dateFunc() {
    return new Date();
  }

  closeSlide(slide) {
    slide.close();
  }

}