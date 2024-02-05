import { Component, OnInit } from '@angular/core';
import { School, InstitutionsService } from '../institutions.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})
export class InstituteListComponent implements OnInit {

  institutions: School[] | undefined;

  constructor(private institutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.institutions = this.institutionsService.getInstitutions();
  }

}
