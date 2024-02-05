import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolsService } from '../institutions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  isLoading = false;

  constructor(private schoolService: SchoolsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.isLoading = true;
    this.schoolService.createSchool(form.value).subscribe({
      next:(value)=>{
        alert("Added new School Successfully")
        this.router.navigate([""], {relativeTo: this.route})
        this.isLoading = false;
      },
      error:(err) => {
        this.isLoading = false
          alert(err)
      },
    });
  }

}
