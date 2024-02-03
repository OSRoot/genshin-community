import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
      username:['' , [Validators.required, Validators.minLength(6)]],
      phone:[''],
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



async submitRegister(){
  console.log(this.form.value);
  await this.helpers.StartLoading({message:'Please wait...'})
  if (this.form.invalid){
    await this.helpers.StopLoading();
    this.helpers.PresentGenericToaster({message:'Please Enter Valid Email and Password'})
    return
  }

  this.auth.login('/user/register',this.form.value).subscribe(
    res=>{
      this.helpers.StopLoading();
      // this.helpers.PresentGenericToaster({message:res.message})
    },
    err=>{
      this.helpers.StopLoading();
      this.helpers.PresentGenericToaster({message:err.error.message || 'Not connected to internet'})
    }
  )
}
}
