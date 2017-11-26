import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';

import { MyApp } from './app.component';

import { RedditsPage } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [MyApp, RedditsPage, SettingsPage, AboutPage, DetailsPage, TabsPage],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, RedditsPage, SettingsPage, AboutPage, DetailsPage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
