import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFullPostPage } from './view-full-post.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFullPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFullPostPageRoutingModule {}
