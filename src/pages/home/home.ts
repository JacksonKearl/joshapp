import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icon: string = "happy";

  constructor(public navCtrl: NavController, private vibration: Vibration) { }

  reset() {
    this.icon = "happy";
  }

  makeVibe() {
    this.icon = "sad";
    this.vibration.vibrate(1)
    const vibrator = setInterval(() => this.vibration.vibrate(1), 250);
    setTimeout(() => { clearInterval(vibrator); this.reset() }, 2000);
  }
}
