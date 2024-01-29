import { Injectable } from '@angular/core';

export interface Institute {
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
export class InstitutionsService {
  constructor() {}

  private institutions: Institute[] = [
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

  getInstitutions(): Institute[] {
    return this.institutions.slice();
  }
}
