import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterImageStagePage } from './register-image-stage.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterImageStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterImageStagePageRoutingModule {}
