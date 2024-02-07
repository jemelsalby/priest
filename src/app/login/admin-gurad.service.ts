import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuradService  {
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
          if(user && user.email == 'admin@csachanda.com'){
            return true
          }
          alert("unauthorized access")
          return this.router.createUrlTree(['../'])
        })
      )
    }
}
