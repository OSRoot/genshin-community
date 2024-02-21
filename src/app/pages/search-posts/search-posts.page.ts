import { Component, OnInit } from '@angular/core';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.page.html',
  styleUrls: ['./search-posts.page.scss'],
})
export class SearchPostsPage implements OnInit {

  constructor(
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
    StatusBar.setStyle({ style: StatusBarStyle.Light });
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color: '#F4F4F4' })
  }

  ionViewWillLeave(){
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color: '#154875' })
  }
}
