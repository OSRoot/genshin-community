import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostOptionsPopoverPageRoutingModule } from './post-options-popover-routing.module';

import { PostOptionsPopoverPage } from './post-options-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostOptionsPopoverPageRoutingModule
  ],
  declarations: [PostOptionsPopoverPage]
})
export class PostOptionsPopoverPageModule {}
