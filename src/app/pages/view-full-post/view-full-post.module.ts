import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFullPostPageRoutingModule } from './view-full-post-routing.module';

import { ViewFullPostPage } from './view-full-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFullPostPageRoutingModule
  ],
  declarations: [ViewFullPostPage]
})
export class ViewFullPostPageModule {}
