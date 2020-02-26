import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../Places.service';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BookingOfferComponent } from '../booking-offer/booking-offer.component';

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

  title: string;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe((data) => {
      const place = this.placeService.getPlaceById(data.get('id'));
      this.title = place.name;
    });
  }

  async openAction() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      mode: 'md',
      buttons: [
        {
          text: 'Book Place',
          icon: 'trail-sign-outline',
          handler: () => {
            console.log('Booked clicked');
            this.modalOpen('booked');
          }
        },
        {
          text: 'Reedem',
          icon: 'chatbox-outline',
          handler: () => {
            console.log('Reedem clicked');
            this.modalOpen('reedem');
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

  async modalOpen(modalVal: 'booked' | 'reedem') {
    if (modalVal === 'booked') {
      const modal = await this.modalCtrl.create({
        component: BookingOfferComponent,
        componentProps: {
          'name': 'Douglas',
          'phone': '123456789',
          'age': '20'
        }
      });
      return await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: BookingOfferComponent,
        componentProps: {
          'reedem': 'Please Reedem It'
        }
      });
      return await modal.present();
    }
  }
}
