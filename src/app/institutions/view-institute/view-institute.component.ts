import { Component, OnInit } from '@angular/core';
import { Institute, InstitutionsService } from '../institutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.css'],
})
export class ViewInstituteComponent implements OnInit {
  institute: Institute | undefined;
  constructor(
    private institutionService: InstitutionsService,
    private route: ActivatedRoute
  ) {
    this.institute = this.institutionService.getInstitution(+this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params) => {
      this.institute = this.institutionService.getInstitution(+params['id']);

    });
  }
}
