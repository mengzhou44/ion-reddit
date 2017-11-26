import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(
    public navCtrl: NavController,
    private appMinimize: AppMinimize,
    private alertCtrl: AlertController
  ) {}

  minimize() {
    console.log('minimize button is clicked!');
    this.appMinimize.minimize();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
