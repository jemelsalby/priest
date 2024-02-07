import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from '../notification.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {

  @ViewChild('imageVal', { static: false })
  imageValue?: ElementRef;
  isUploading = false
  image = ''
  constructor(private storage: StorageService, private noti:NotificationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    this.noti.createNotification(form.value).subscribe({
      next: (value) => {
        alert('Added new Notification Successfully');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  onImageUpload(value: any) {
    this.image = '';
    const file = value.target.files[0];
    if (this.storage.isImageValid(file)) {
      this.isUploading = true;
      this.storage.imageUpload(file, 'notification').then((url) => {
        this.image = url;
        this.isUploading = false;
      });
    } else {
      if (this.imageValue) {
        this.imageValue.nativeElement.value = '';
      }
      alert(
        'Upload valid file. Valid file is either png or jpeg with size less than 2 MB'
      );
    }
  }

}
