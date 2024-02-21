import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostOptionsPopoverPage } from './post-options-popover.page';

const routes: Routes = [
  {
    path: '',
    component: PostOptionsPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostOptionsPopoverPageRoutingModule {}
