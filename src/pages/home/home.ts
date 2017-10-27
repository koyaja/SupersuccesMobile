import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string = " Ce message et cette image sera  Partagé cette partie "

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }



  SharedFacebook() {
    this.socialSharing.shareViaFacebook(this.message, "https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D").then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });

  }
  SharedWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.message, "https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D").then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
