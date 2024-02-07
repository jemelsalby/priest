import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from '../notification.service';

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
  constructor(
     private noti:NotificationService, private router: Router) { }

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
  }

}
