import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private auth:AuthService,
    private router:Router,
  ){
  }
  canLoad(): Observable<boolean> {
    return this.auth.isAuthenticated.pipe(
      filter(BS_VAL => BS_VAL !== null),
      take(1),
      map(isAuthenticated => {
        console.log('AutoLogin: ', isAuthenticated);
        if (isAuthenticated) {
          this.router.navigateByUrl('/tabs',{replaceUrl:true});
        }
          return true;
      })
    );
  }
}
