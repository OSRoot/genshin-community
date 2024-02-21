import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './core/guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canLoad:[IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/auth/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'register-image-stage',
    loadChildren: () => import('./pages/auth/register-image-stage/register-image-stage.module').then( m => m.RegisterImageStagePageModule)
  },

  {
    path: 'view-full-post',
    loadChildren: () => import('./pages/view-full-post/view-full-post.module').then( m => m.ViewFullPostPageModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./pages/create-post/create-post.module').then( m => m.CreatePostPageModule)
  },
  {
    path: 'post-options-popover',
    loadChildren: () => import('./pages/post-options-popover/post-options-popover.module').then( m => m.PostOptionsPopoverPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
