import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { School, SchoolsService } from '../institutions.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css'],
})
export class CreateSchoolComponent implements OnInit {
  @ViewChild('manager_img', { static: false })
  managerValue?: ElementRef;

  @ViewChild('principal_img', { static: false })
  principalValue?: ElementRef;

  isUploading = false;
  isEditing = false;
  id: string = '';
  // principalImage: string = '';
  // managerImage: string = '';
  school: School = {
    name: '',
    syllabus: '',
    phone: '',
    district: '',
    email: '',
    principal: '',
    principal_image: '',
    manager: '',
    manager_image: '',
  };

  constructor(
    private schoolService: SchoolsService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id){
        this.schoolService
          .getSchool(params['id'])
          .subscribe((resp) => (this.school = resp));
        this.isEditing = params['id'] != null;
        console.log(this.isEditing)
      }
    });
  }

  onSubmit(form: NgForm) {

    if(this.isEditing){
      this.schoolService.editSchool(form.value, this.id).subscribe({
        next: (value) => {
          alert('Edited school Successfully');
          this.isEditing = false
          this.router.navigate([''], { relativeTo: this.route });
        },
        error: (err) => {
          alert(err);
        },
      });
    }else{
      this.schoolService.createSchool(form.value).subscribe({
        next: (value) => {
          alert('Added new School Successfully');
          this.router.navigate([''], { relativeTo: this.route });
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }

  onPrinciUpload(value: any) {
    const file = value.target.files[0];
    if (this.storage.isImageValid(file)) {
      this.isUploading = true;
      this.storage.imageUpload(file, 'pincipal').then((url) => {
        this.school.principal_image = url;
        this.isUploading = false;
      });
    } else {
      if (this.principalValue) {
        this.principalValue.nativeElement.value = '';
      }
      alert(
        'Upload valid file. Valid file is either png or jpeg with size less than 2 MB'
      );
    }
  }

  onManagerUpload(value: any) {
    const file = value.target.files[0];
    if (this.storage.isImageValid(file)) {
      this.isUploading = true;
      this.storage.imageUpload(file, 'manager').then((url) => {
        this.school.manager_image = url;
        this.isUploading = false;
      });
    } else {
      if (this.managerValue) {
        this.managerValue.nativeElement.value = '';
      }
      alert(
        'Upload valid file. Valid file is either png or jpeg with size less than 2 MB'
      );
    }
  }

}
