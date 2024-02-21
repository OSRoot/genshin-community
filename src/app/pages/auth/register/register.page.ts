import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { AlertController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ConfirmPassValue!:string;
  form!:FormGroup
  constructor(
    private helpers:HelpersService,
    private plt:Platform,
    private fb:FormBuilder,
    private auth:AuthService,
    private alertCtrl:AlertController

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
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPass:['', [Validators.required, Validators.minLength(8)]],
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
  const body = {
    username:this.form.value.username,
    email:this.form.value.email,
    password:this.form.value.password
  }
  this.auth.login('/user/register',body).subscribe(
    res=>{
      this.helpers.StopLoading();
      this.navigate('register-image-stage', 'forward')
    },
    err=>{
      this.helpers.StopLoading();
      this.helpers.PresentGenericToaster({message:err.error.message || 'Not connected to internet'})
    }
  )
}

////////////////////////////////////////////////////////
async registerConfirm(){
  const alert = await this.alertCtrl.create({
    header:'Confirm',
    mode:'ios',
    subHeader:'Kindly review your register details',
    animated:true,
    backdropDismiss:true,
    message:'By Clicking register, The account will be created, Are you Sure?',
    buttons:[
      {text:'Register', role:'confirm', handler:()=>{
        this.submitRegister()
      }},
      {text:'back', role:'cancel',}
    ]
  });
  await alert.present();
}

}
