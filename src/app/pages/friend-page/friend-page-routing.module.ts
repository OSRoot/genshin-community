import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendPagePage } from './friend-page.page';

const routes: Routes = [
  {
    path: '',
    component: FriendPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendPagePageRoutingModule {}
