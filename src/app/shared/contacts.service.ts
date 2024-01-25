import { Injectable } from '@angular/core';
import  * as contactJson from "src/assets/jsons/contacts.json";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: any[] = contactJson

  constructor() { }

  getContacts(){
    return this.contacts.slice();
  }

}
