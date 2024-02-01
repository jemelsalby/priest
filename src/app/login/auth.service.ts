import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  displayName: string;
  refreshToken: string;
  expiresIn: number;
  loaclId: string;
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
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError), tap((response) => this.handleAuthenticataion(response)));
  }

  handleAuthenticataion(response: AuthResponseData) {
    const expiresIn = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );

    let newUser = new User(
      response.email,
      response.loaclId,
      response.displayName,
      response.idToken,
      expiresIn
    );
    this.user.next(newUser);
    localStorage.setItem('userData', JSON.stringify(newUser));
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
    }

    return throwError(() => errMsg);
  }
}
