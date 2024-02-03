import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private helpers:HelpersService,
    private plt:Platform
  ) { }

  ngOnInit() {
    return true
  }
  ionViewWillEnter(){
    if (this.plt.is("android") || this.plt.is("ios")){
      this.setStatuBar()
    }
  }

  setStatuBar():void{
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color: '#154875' })
  }
}
