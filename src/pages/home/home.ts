import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icon: string = "happy";
  lastexplosion: string = "";
  lastExplosion: number = 0;
  errdata: string = "";
  constructor(public navCtrl: NavController, private vibration: Vibration, private data: DataService) {
    setInterval(() => this.checkForExplosion(), 2000);
  }

  checkForExplosion() {
    this.data.getLastTime().subscribe(
      res => {
        if (this.lastexplosion === "")
          this.lastexplosion = res.text();
        else if (this.lastexplosion !== res.text()) {
          this.lastexplosion = res.text();
          this.makeVibe();
        }
      },
      err => this.errdata = err
    );
  }

  sendExplosion() {
    this.data.updateLastTime().subscribe(res => { }, err => this.errdata = err);;
  }

  reset() {
    this.icon = "happy";
  }

  makeVibe() {
    this.icon = "sad";
    this.vibration.vibrate(1)
    const vibrator = setInterval(() => this.vibration.vibrate(1), 150);
    setTimeout(() => { clearInterval(vibrator); this.reset() }, 2000);
  }
}
