import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface School {
  name: string;
  syllabus: string;
  district: string;
  principal: string;
  manager: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://csa-chanda-default-rtdb.asia-southeast1.firebasedatabase.app';
  private schoolsUrl = this.baseUrl + '/schools.json'
  private institutions: School[] = [
    {
      name: 'BJM CARMEL ACADEMY,TUKUM',
      syllabus: 'CBSE',
      district: 'CHANDRAPUR',
      principal: 'Fr. Jaison CMI',
      manager: 'Fr. Jaison CMI',
      phone: '9423642711',
      email: 'carmeacademy@rediffmail.com',
    },
    {
      name: 'MOUNT CARMEL SCHOOL,CD',
      syllabus: 'CBSE',
      district: 'CHANDRAPUR',
      principal: 'SR.NITHYA CMC',
      manager: 'SR.PRINCY',
      phone: '7588658533',
      email: 'principalmcchs@yahoomail.com',
    },
  ];

  getSchools(): School[] {
    return this.institutions.slice();
  }

  getSchool(index: number): School{
    return this.institutions[index];
  }

  createSchool(school: School){
    return this.http.post(
      this.schoolsUrl,
      school
    ).pipe(
      catchError((error: HttpErrorResponse)=>{
        let errorMsg = "An Unknown Error Occured"
        if(error.status === 401){
          errorMsg = 'You dont have access to this process'
        }
        return throwError(()=>errorMsg)
      })
    )
  }
}
