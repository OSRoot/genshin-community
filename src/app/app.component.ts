import { Component } from '@angular/core';
import {SplashScreen} from '@capacitor/splash-screen';
import { AuthService } from './core/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // private authService:AuthService,
    // private navCtrl:NavController,
    private storage:Storage
  )
   {
    this.initStorage();
    this.checkUser();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }


  async initStorage():Promise<void>{
    await this.storage.create();
  }


  async checkUser():Promise<void | boolean> {
    // const token = this.authService.accessToken;
    // if(!token) return this.navCtrl.navigateRoot("/login");
    // return this.navCtrl.navigateRoot("/tabs")
  }
}
