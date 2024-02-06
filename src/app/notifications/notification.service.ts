import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

export interface AppNotification{
  id?: string;
  title: string;
  image_url: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl =
    'https://csa-chanda-default-rtdb.asia-southeast1.firebasedatabase.app';
  private notiUrl = this.baseUrl + '/notification.json';
  constructor(private http: HttpClient) { }

  getNotification(){
    return this.http.get<AppNotification[]>(this.notiUrl).pipe(
      map((value: { [key: string]: any }) => {
        return Object.keys(value).map((key) => {
          return {
            id: key,
            ...value[key],
          };
        });
      })
    );
  }

  createNotification(notification: Notification){
    return this.http.post(this.notiUrl, notification).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'An Unknown Error Occured';
        if (error.status === 401) {
          errorMsg = 'You dont have access to this process';
        }
        return throwError(() => errorMsg);
      })
    );
  }
}
