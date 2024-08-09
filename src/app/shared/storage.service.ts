import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private fireStorage: AngularFireStorage) { }

  async imageUpload(file: any, partialPath: string): Promise<string> {
    if (file) {
      let r = (Math.random() + 1).toString(36).substring(7);
      const path = `images/${partialPath}/${file.name}-${r}`;
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
