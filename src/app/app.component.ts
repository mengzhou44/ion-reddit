import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditService } from './services/reddit-service';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      MyCordovaPlugin.getDate((result) => {
        console.log("Today is", result);
      })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


