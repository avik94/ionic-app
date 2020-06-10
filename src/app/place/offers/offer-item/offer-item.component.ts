import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit  {

  @ViewChild('slide', {static: false}) slide: ElementRef;
  @Input() offer;

  constructor() { }

  ngOnInit() {
  }

  dateFunc() {
    return new Date();
  }

  closeSlide(slide) {
    console.log(slide);
    console.log(this.slide);
    slide.close();
  }

}
