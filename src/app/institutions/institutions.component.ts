import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Institute, InstitutionsService } from './institutions.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
})
export class InstitutionsComponent implements OnInit {

  institutions: Institute[] | undefined;

  constructor(private institutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.institutions = this.institutionsService.getInstitutions();
  }

}
