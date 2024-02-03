import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!:FormGroup
  constructor(
    private helpers:HelpersService,
    private plt:Platform,
    private fb:FormBuilder,
    private auth:AuthService

  ) {
    this.createForm()
   }

  ngOnInit() {
    return true
  }


  createForm(){
    this.form = this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
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

  navigate(page:string, dir:string){
    this.helpers.navigate(page,dir)
  }


OpenGithub = async () => {
  await Browser.open({ url: 'https://github.com/osroot' });
};


async submitLogin(){
  console.log(this.form.value);
  await this.helpers.StartLoading({message:'Please wait...'})
  if (this.form.invalid){
    await this.helpers.StopLoading();
    this.helpers.PresentGenericToaster({message:'Please Enter Valid Email and Password'})
    return
  }

  this.auth.login('/user/login',this.form.value).subscribe(
    res=>{
      this.helpers.StopLoading();
    },
    err=>{
      this.helpers.StopLoading();
    }
  )
}
}
