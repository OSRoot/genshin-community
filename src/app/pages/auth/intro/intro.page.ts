import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';
import Swiper from 'swiper';

const INTRO_KEY = 'intro-key';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  delayMe:boolean=false
  @ViewChild('swiper',{ static: false })
  swiperRef:ElementRef|undefined;
  swiper?:Swiper
  /////////////////////////////////////////////////////////
  constructor(
    private storage:Storage,
    private router:Router,
    private alertCtrl:AlertController,
    private plt:Platform

  ) {
  }
  ionViewWillEnter(){
    if (this.plt.is("android") || this.plt.is("ios")){
      this.setStatuBar()
    }
  }

  setStatuBar():void{
    StatusBar.setStyle({ style: StatusBarStyle.Light });
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color: '#eeeeee' })
  }
  /////////////////////////////////////////////////////////
  ngOnInit() {
    setTimeout(() => {
          this.delayMe = true
        }, 3500);
  }

  /////////////////////////////////////////////////////////
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  /////////////////////////////////////////////////////////

  goNext(){
    this.swiperRef?.nativeElement.swiper.slideNext(500);
  };
    /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  swiperSlideChanged(ev:any){
    console.log(ev);

  }
  /////////////////////////////////////////////////////////
  async start(){
    await this.storage.set(INTRO_KEY, 'true');
    this.router.navigateByUrl('/login',{replaceUrl:true});
  }
  /////////////////////////////////////////////////////////

  async skipAlert ():Promise<void>{
    const alert = await this.alertCtrl.create({
      header:'Leave Intro',
      subHeader:'Ignore reading hints',
      message:'By Skipping this into, you will not see it again, skip?',
      animated:true,
      backdropDismiss:true,
      buttons:[
        {text:'Skip', role:'confirm',handler:()=>{
          this.start();
        }},
        {text:`Don't skip`, cssClass:'no-skip-btn', role:'cancel'}
      ]
    });
    await alert.present();
   }
    /////////////////////////////////////////////////////////
}
