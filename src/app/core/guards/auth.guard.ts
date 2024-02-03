import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { HelpersService } from '../services/helpers/helpers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private auth:AuthService,
    private router:Router,
    private helper:HelpersService
  ){}
   canLoad(): Observable<boolean>{
    console.log('First CanLLoad: ',this.auth.isAuthenticated);

    return this.auth.isAuthenticated.pipe(
      filter(BH_VALUE=> BH_VALUE!==null),
      take(1),
      map(isAuthenticated=>{
      console.log('Map in CanLLoad: ',isAuthenticated);

        if(isAuthenticated){
          return true
        }
        else{
          console.log(isAuthenticated);
          this.router.navigateByUrl('/login',{replaceUrl:true});
          return false
        }
      })
    );
  }
}
