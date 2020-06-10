import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../../Places.service';
import { NavController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  newOfferForm: FormGroup;
  constructor(
    private placeService: PlaceService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.newOfferForm = new FormGroup({
      title: new FormControl(null, {validators : Validators.required}),
      description: new FormControl(null, {validators: Validators.required}),
      price: new FormControl(null, {validators: Validators.required}),
      toDate: new FormControl(null, {validators: Validators.required}),
      fromDate: new FormControl(null, {validators: Validators.required})
    });
  }

  async submitForm() {
    console.log(this.newOfferForm.value);
    const data = {
      id: Math.random().toString(),
      userId: 'abc',
      name: this.newOfferForm.value.title,
      imageUrl: 'https://www.leschaco.com/fileadmin/user_upload/leschaco_logistics_france_europe_sea_air_freight_tank_container_warehousing_supply_chain_solutions.png',
      location: 'California',
      description: this.newOfferForm.value.description,
      price: this.newOfferForm.value.price,
      toDate: this.newOfferForm.value.toDate,
      fromDate: this.newOfferForm.value.fromDate,
    };
    this.placeService.addNewPlace(data);
    const placeLists = this.placeService.getPlacesList();
    this.placeService.placeAction.next(placeLists);
    const loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
    this.navCtrl.navigateBack('places/tabs/offers');
    const toast = await this.toastCtrl.create({
      message: 'New Offer Added Succesfully',
      duration: 2000
    });
    await toast.present();
  }



}
