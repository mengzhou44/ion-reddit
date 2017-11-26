import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit-service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefault();
  }

  getDefault() {
    this.category = localStorage.getItem('category') || 'sports';
    this.limit = localStorage.getItem('limit') || 10;
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
    });
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, { item });
  }
}
