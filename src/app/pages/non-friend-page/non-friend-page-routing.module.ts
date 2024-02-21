import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonFriendPagePage } from './non-friend-page.page';

const routes: Routes = [
  {
    path: '',
    component: NonFriendPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonFriendPagePageRoutingModule {}
