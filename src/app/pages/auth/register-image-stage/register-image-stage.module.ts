import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterImageStagePageRoutingModule } from './register-image-stage-routing.module';

import { RegisterImageStagePage } from './register-image-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterImageStagePageRoutingModule
  ],
  declarations: [RegisterImageStagePage]
})
export class RegisterImageStagePageModule {}
