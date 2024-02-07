import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuradService  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

      return this.authService.user.pipe(
        take(1),
        map((user) =>{
          const isAuth = !!user;
          if(isAuth){
            return true
          }
          return this.router.createUrlTree(['/login'])
        })
      )
    }
}
