import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  errdata: string;
  constructor(public navCtrl: NavController, private data: DataService) {

  }

  sendExplosion() {
    this.data.updateLastTime().subscribe(res => { }, err => this.errdata = err);;
  }
}
 