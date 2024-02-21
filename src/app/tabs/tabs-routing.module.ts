import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'account-settings',
        loadChildren: () => import('../pages/auth/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
      },
      {
        path: 'user-privacy',
        loadChildren: () => import('../pages/auth/user-privacy/user-privacy.module').then( m => m.UserPrivacyPageModule)
      },
      {
        path: 'friends-requests',
        loadChildren: () => import('../pages/friends-requests/friends-requests.module').then( m => m.FriendsRequestsPageModule)
      },
      {
        path: 'friend-page',
        loadChildren: () => import('../pages/friend-page/friend-page.module').then( m => m.FriendPagePageModule)
      },
      {
        path: 'non-friend-page',
        loadChildren: () => import('../pages/non-friend-page/non-friend-page.module').then( m => m.NonFriendPagePageModule)
      },
      {
        path: 'friends',
        loadChildren: () => import('../pages/friends/friends.module').then( m => m.FriendsPageModule)
      },
      {
        path: 'search-friends',
        loadChildren: () => import('../pages/search-friends/search-friends.module').then( m => m.SearchFriendsPageModule)
      },
      {
        path: 'search-posts',
        loadChildren: () => import('../pages/search-posts/search-posts.module').then( m => m.SearchPostsPageModule)
      },
    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
