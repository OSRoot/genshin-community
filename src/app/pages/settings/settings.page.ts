import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from 'src/app/core/services/data/data.service';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  user!:IUser;
  constructor(
    private auth:AuthService,
    private data:DataService,
    private storage:Storage,
    private helpers:HelpersService
  ) { }

   ngOnInit() {
   this.getUser();

  }
  async logout(){
  const comfirmed = await this.helpers.GenericAlertConfirm({message:'Are you sure you want to log out?', header:'Log Out'});
  if (comfirmed.role==='confirm') await this.auth.logOut();
  else return
}

  async getUser(){
    await this.storage.get('user').then((user)=>{
      this.user = user
      console.log(this.user);

    })
}
}
