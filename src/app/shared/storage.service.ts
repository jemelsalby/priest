import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private fireStorage: AngularFireStorage) { }

  async imageUpload(file: any, partialPath: string): Promise<string> {
    if (file) {
      const path = `images/${partialPath}/${file.name}`;
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
