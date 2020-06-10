import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../Places.service';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BookingOfferComponent } from '../booking-offer/booking-offer.component';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
    ) { }

  place: Place;

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      this.place = this.placeService.getPlaceById(data.get('id'));
    });
  }

  // ionViewWillEnter() {
  // }

  async openAction() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      mode: 'md',
      buttons: [
        {
          text: 'Custom Date',
          icon: 'calendar-outline',
          handler: () => {
            this.modalOpen('custom');
          }
        },
        {
          text: 'Random Date',
          icon: 'calendar-outline',
          handler: () => {
            this.modalOpen('random');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  async modalOpen(modalVal: 'custom' | 'random') {
    if (modalVal === 'custom') {
      const modal = await this.modalCtrl.create({
        component: BookingOfferComponent,
        componentProps: {
          offerDetails: this.place,
          selectType: modalVal
        }
      });
      return await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: BookingOfferComponent,
        componentProps: {
          offerDetails: this.place,
          selectType: modalVal
        }
      });
      return await modal.present();
    }
  }
}
