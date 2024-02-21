import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendPagePageRoutingModule } from './friend-page-routing.module';

import { FriendPagePage } from './friend-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendPagePageRoutingModule
  ],
  declarations: [FriendPagePage]
})
export class FriendPagePageModule {}
