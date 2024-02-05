import { Component, OnInit } from '@angular/core';
import { School, SchoolsService } from '../institutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.css'],
})
export class ViewInstituteComponent implements OnInit {
  school: School | undefined;
  constructor(
    private schoolService: SchoolsService,
    private route: ActivatedRoute
  ) {
    this.school = this.schoolService.getSchool(+this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params) => {
      this.school = this.schoolService.getSchool(+params['id']);

    });
  }
}
