import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController) {
    this.category = localStorage.getItem('category') || 'sports';
    this.limit = localStorage.getItem('limit') || 10;
  }

  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);

    this.navCtrl.push(RedditsPage);
  }
}
