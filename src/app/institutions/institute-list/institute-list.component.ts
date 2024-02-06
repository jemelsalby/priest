import { Component, OnInit } from '@angular/core';
import { School, SchoolsService } from '../institutions.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})
export class InstituteListComponent implements OnInit {

  schools: School[] | undefined;

  constructor(private schoolsService: SchoolsService) { }

  ngOnInit(): void {
    this.schoolsService.getSchools().subscribe({
      next:(value)=>{
        this.schools = value
      }
    });
  }

}
