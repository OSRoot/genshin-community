import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { IUser } from '../core/interfaces/user.interface';
import { AuthService } from '../core/services/auth/auth.service';
import { DataService } from '../core/services/data/data.service';
import { HelpersService } from '../core/services/helpers/helpers.service';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user!:IUser
  isLoggedIn!: boolean;
  isAutenticated: any;
  constructor(
    private router:Router,
    private data:DataService,
    private helper:HelpersService,
    private auth:AuthService,
    private storage:Storage,
    private plt:Platform

  ) { }
/////////////////////////////////////////////////////////////
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
  ///////////// Method to help Activate the Tab ////////////
  isActive(route:string):boolean{
  return this.router.isActive(route, false)
  }


}
