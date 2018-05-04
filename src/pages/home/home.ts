import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icon: string = "happy";
  mydata: string = "";
  lastExplosion: number = 0;

  constructor(public navCtrl: NavController, private vibration: Vibration, private http: Http) {
    setInterval(() => this.checkForExplosion(), 2000);
  }

  checkForExplosion() {
    this.http.get("http://18.62.20.88:3000/team1").subscribe(
      res => {
        this.mydata += res.text() + "\n";
      },
      err => {
        this.mydata = err;
      });
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
