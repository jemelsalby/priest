import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, exhaustMap, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  displayName: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiToken = 'AIzaSyC1AEur16UFC1SoyO51PoxFXyuosDzhE1A';
  private loginUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
    this.apiToken;
  private signUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
    this.apiToken;
  private updateProfileUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' +
    this.apiToken;
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string, name: string) {
    return this.http
      .post<AuthResponseData>(this.signUpUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        exhaustMap((response) => {
          return this.http.post<AuthResponseData>(this.updateProfileUrl, {
            idToken: response.idToken,
            displayName: name,
            deleteAttribute: ['PHOTO_URL'],
            returnSecureToken: false,
          });
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((response) => this.handleAuthenticataion(response))
      );
  }
  
  autoLogin() {
    const val = localStorage.getItem('userData');
    if (val !== null) {
      const userData: {
        displayName: string;
        email: string;
        id: string;
        _token: string;
        _tokenExpiry: string;

      } = JSON.parse(val);
      
      const expireTime = new Date(userData._tokenExpiry)
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData.displayName,
        userData._token,
        expireTime
      );
      if(loadedUser.token){
        this.user.next(loadedUser);
      }
      const expirationDuration =
        expireTime.getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
    return
  }

  logout(){
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationTime: number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    }, expirationTime);
  }

  handleAuthenticataion(response: AuthResponseData) {
    
    const expiresIn = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );

    let newUser = new User(
      response.email,
      response.localId,
      response.displayName,
      response.idToken,
      expiresIn
    );
    
    this.user.next(newUser);
    localStorage.setItem('userData', JSON.stringify(newUser));
    
    const expirationDuration =
        expiresIn.getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
  }

  handleError(errorRes: HttpErrorResponse) {
    let errMsg = 'An Unknown Error Occured';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errMsg);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errMsg = 'This email already exists add another email';
        break;
      case 'EMAIL_NOT_FOUND':
        errMsg = 'This email does not exists';
        break;
      case 'INVALID_PASSWORD':
        errMsg = 'This password is incorrect';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errMsg = 'Invalid login credntitals';
        break;
      case 'INVALID_ID_TOKEN':
        errMsg = 'Credential is no longer valid. Please sign in again.';
        break;
    }

    return throwError(() => errMsg);
  }
}
