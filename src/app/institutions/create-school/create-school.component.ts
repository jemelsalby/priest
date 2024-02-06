import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { SchoolsService } from '../institutions.service';

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

  isLoading = false;
  isUploading = false;
  principalImage: string = '';
  managerImage: string = '';

  constructor(
    private schoolService: SchoolsService,
    private router: Router,
    private route: ActivatedRoute,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
  

    this.isLoading = true;
    this.schoolService.createSchool(form.value).subscribe({
      next: (value) => {
        alert('Added new School Successfully');
        this.router.navigate([''], { relativeTo: this.route });
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        alert(err);
      },
    });
  }

  onPrinciUpload(value: any) {
    this.principalImage = '';
    const file = value.target.files[0];
    if (this.isImageValid(file)) {
      this.isUploading = true;
      this.imageUpload(file, 'pincipal').then((url) => {
        this.principalImage = url;
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
    this.managerImage = '';
    const file = value.target.files[0];
    if (this.isImageValid(file)) {
      this.isUploading = true;
      this.imageUpload(file, 'manager').then((url) => {
        this.managerImage = url;
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

  async imageUpload(file: any, partialPath: string): Promise<string> {
    if (file) {
      const path = `images/${partialPath}_${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
      return url;
    }
    return '';
  }

  isImageValid(file: any): boolean {
    return (
      (file.type === 'image/jpeg' || file.type === 'image/png') &&
      +file.size <= 2000000
    );
    // return (
    //   (file.type === 'image/jpeg' || file.type === 'image/png') &&
    //   +file.size <= 80000
    // );
  }
}
