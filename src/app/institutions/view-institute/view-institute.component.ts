import { Component, OnInit } from '@angular/core';
import { School, SchoolsService } from '../institutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.css'],
})
export class ViewInstituteComponent implements OnInit {
  school?: School | null;
  constructor(
    private schoolService: SchoolsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params) => {
      this.schoolService.getSchool(params['id']).subscribe({
        next:(value)=> {
            this.school = value;
        },
      });

    });
  }
}
