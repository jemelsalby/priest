import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InstitutionsService } from './institutions.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class InstitutionsComponent implements OnInit {

  institutions: { id: number; name: string; syllabus: string; district: string; }[] | undefined;

  constructor(private institutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.institutions = this.institutionsService.getInstitutions();
  }

}
