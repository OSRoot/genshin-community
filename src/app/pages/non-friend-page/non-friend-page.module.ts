import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonFriendPagePageRoutingModule } from './non-friend-page-routing.module';

import { NonFriendPagePage } from './non-friend-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonFriendPagePageRoutingModule
  ],
  declarations: [NonFriendPagePage]
})
export class NonFriendPagePageModule {}
