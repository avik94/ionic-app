import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../Places.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlaceService,
    private loadingCtrl: LoadingController,
    private toasterCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  submitEditForm(formData: NgForm) {
    this.route.paramMap.subscribe(async (data) => {
      const place = this.placeService.getPlaceById(data.get('id'));
      this.placeService.updatePlace(data.get('id'), formData.value, place);
      const loading = await this.loadingCtrl.create({
        cssClass: 'loadingSpinner',
        spinner: 'circular',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      const placeLists = this.placeService.getPlacesList();
      this.placeService.placeAction.next(placeLists);
      await loading.onDidDismiss();
      this.navCtrl.navigateBack(['places/tabs/offers']);
      const toast = await this.toasterCtrl.create({
        message: 'Offer Updated Succesfully',
        duration: 2000
      });
      await toast.present();
    });
  }
}
