import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

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
  constructor(private fireStorage: AngularFireStorage, private noti:NotificationService, private router: Router) { }

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
    if (this.isImageValid(file)) {
      this.isUploading = true;
      this.imageUpload(file, 'notification').then((url) => {
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
    }
}
