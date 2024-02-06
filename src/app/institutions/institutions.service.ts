import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

export interface School {
  id?: string;
  name: string;
  syllabus: string;
  district: string;
  principal: string;
  manager: string;
  phone: string;
  email: string;
  principal_image: string;
  manager_image: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  constructor(private http: HttpClient) {}

  private baseUrl =
    'https://csa-chanda-default-rtdb.asia-southeast1.firebasedatabase.app';
  private schoolsUrl = this.baseUrl + '/schools.json';

  getSchools() {
    return this.http.get(this.schoolsUrl).pipe(
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

  getSchool(index: string) {
    return this.http.get<School>(this.baseUrl + '/schools/' + index + '.json');
  }

  createSchool(school: School) {
    return this.http.post(this.schoolsUrl, school).pipe(
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
