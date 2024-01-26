import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  constructor() { }

  private institutions: {id:number, name: string, syllabus:string, district: string}[] = [
    {id: 1, name: "BJM CARMEL ACADEMY,TUKUM", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 2, name: "MOUNT CARMEL SCHOOL,CD", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 3, name: "ST.MARY'S HIGH SCHOOL,DURGAPUR", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 4, name: "VIANNEY VIDYA MANDIR,GHUGHUS", syllabus: "ICSE", district: "CHANDRAPUR"},
    {id: 5, name: "ST.ANNE'S HIGHSCHOOL,SUMTHANA", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 6, name: "ST.ANNE'S HIGHSCHOOL,WARORA", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 7, name: "ST.ANNE'S PUBLIC SCHOOL,WARORA", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 8, name: "ST.ANNE'S HIGHSCHOOL,MUL", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 9, name: "ST.ANNE'S PUBLIC SCHOOL,MUL", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 10, name: "VISHWAJYOTHI CONVENTSCHOOL,TALODHI", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 11, name: "CHRISTANAND SCHOOL& JR COLLEGE", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 12, name: "VIANNEY PUBLIC SCHOOL,BABUPETH", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 13, name: "VIANNEY JUBILEE SCHOOL,BALLARPUR", syllabus: "ICSE", district: "CHANDRAPUR"},
    {id: 14, name: "DILASAGRAM CONVENT SCHOOL,BAMINI", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 15, name: "DILASAGRAM CONVENT SCHOOL,BAMINI", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 16, name: "MONTFORT SENIOR SECONDARY SCHOOL,BAMINI", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 17, name: "SANJO CONVENT SCHOOL,GONDPIPRI", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 18, name: "STELLA MARIS SCHOOL,RAJURA", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 19, name: "LOURDMATHA SCHOOL,WARUR", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 20, name: "HOLYFAMILY SCHOOL,GADCHANDUR", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 21, name: "ST.THOMAS SCHOOL, JIWATI", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 22, name: "ST.CLARET SCHOOL,CHIMUR", syllabus: "CBSE", district: "CHANDRAPUR"},
    {id: 23, name: "CHRIST SCHOOL VIRUR", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 24, name: "CARMEL ACADEMY ,DATALA", syllabus: "ICSE", district: "CHANDRAPUR"},
    {id: 25, name: "NAVJYOTHI CONVENT SCHOOL,AKSAPUR", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 26, name: "CHAVARA SCHOOL,MAJRI", syllabus: "STATE", district: "CHANDRAPUR"},
    {id: 27, name: "VIANNEY VIDYANIKETAN,NAVEGAON,", syllabus: "ICSE", district: "GADCHIROLI"},
    {id: 28, name: "CARMEL ACADEMY ,WADSA", syllabus: "CBSE", district: "GADCHIROLI"},
    {id: 29, name: "CARMEL SCHOOL ,GADCHIROLI", syllabus: "CBSE", district: "GADCHIROLI"},
    {id: 30, name: "ST.FRANCIS HIGHSCHOOL,NAGEPALLI", syllabus: "STATE", district: "GADCHIROLI"},
    {id: 31, name: "ST.CHAVARA SCHOOL,ETTAPALLI", syllabus: "STATE", district: "GADCHIROLI"},
    {id: 32, name: "ST.JOSEPH NATIONAL SCHOOL,DONGARGAON", syllabus: "STATE", district: "GADCHIROLI"},
    {id: 33, name: "CARMEL ACADEMY CHAMROSHI", syllabus: "STATE", district: "GADCHANDUR"},
    {id: 34, name: "VIANNEY SCHOOL, SNEHASHRAM, BHAMARAGARH", syllabus: "STATE", district: "GADCHIROLI"},
    {id: 35, name: "ASHA NIKETAN SCHOOL, WASA", syllabus: "STATE", district: "GADCHIROLI"},
    {id: 36, name: "ST. ALPHONSA NURSERY, JARAWANDI, DHANORA, ETTAPALLI", syllabus: "", district: "GADCHIROLI"},
    {id: 37, name: "AGRAGAMI HIGH SCHOOL,PIPRI", syllabus: "STATE", district: "WARDHA"},
    {id: 38, name: "ST. ANTHONY'S NATIONAL SCHOOL, WARDHA", syllabus: "ICSE", district: "WARDHA"},
    {id: 39, name: "ST. JOHN'S SCHOOL, ALLIPUR", syllabus: "STATE", district: "WARDHA"},
    {id: 40, name: "ALPHONSA SENIOR SECONDRY SCHOOL, Wardha", syllabus: "CBSE", district: "WARDHA"},
    {id: 41, name: "ST. JOHN'S HIGH SCHOOL, HINGANGHAT", syllabus: "CBSE", district: "WARDHA"},
    {id: 42, name: "MOUNT CARMEL CONVENT SCHOOL, SAMUDRAPUR", syllabus: "CBSE", district: "WARDHA"},
    {id: 43, name: "AGRAGAMI HIGH SCHOOL, MHASALA", syllabus: "CBSE", district: "WARDHA"},
  ]

  getInstitutions(): {id:number, name: string, syllabus:string, district: string}[]{
    return this.institutions.slice();
  }
}
