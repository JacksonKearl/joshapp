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
  errdata: string = "";
  
  constructor(public navCtrl: NavController, private vibration: Vibration, private data: DataService) {
    setInterval(() => this.checkForExplosion(), 200);
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

  makeVibe() {
    this.icon = "sad";
    this.vibration.vibrate(1)
    const vibrator = setInterval(() => this.vibration.vibrate(1), 150);
    setTimeout(() => { 
      clearInterval(vibrator);  
      this.icon = "happy";
    }, 2000);
  }
}
