import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { customAnimation } from './core/scripts/animation';
import { IntroGuard } from './core/guards/intro.guard';
import { AutoLoginGuard } from './core/guards/auto-login.guard';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      navAnimation:customAnimation
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name:'osroot-genshin-community',
      driverOrder:[cordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IntroGuard,
    {provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},],
  bootstrap: [AppComponent],
})
export class AppModule {}
