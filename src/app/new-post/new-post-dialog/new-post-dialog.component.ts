import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import 'firebase/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.scss']
})
export class NewPostDialog {
  imageFile: any;
  image: string | ArrayBuffer;
  caption: string;

  constructor(
    private dialogRef: MatDialogRef<NewPostDialog>,
    private afStorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  handleImageInput = (input): void => {
    if (input.files.length === 0) return; /* Return if no file selected */

    this.imageFile = input.files[0];
    let fr = new FileReader();
    fr.onload = () => {
      this.image = fr.result;
    }
    fr.readAsDataURL(this.imageFile);
  }

  uploadImage = (): void => {
    const randomId = Math.random().toString(36).substring(2);
    const imageUrl = `images/${randomId}`;

    /* Uploading the image as a file */
    let ref = this.afStorage.ref(imageUrl);
    ref.put(this.imageFile)

    /* Uploading the post information (imageUrl, caption and uid) */
    .then(() => {
      this.firestore.collection('posts').add({
        imageUrl,
        caption: this.caption || '',
        uid: 'TODO: CHANGE ME' 
      })

      /* Success message */
      .then(() => {
        this.snackBar.open('Upload successful!', 'Close', { duration: 3000 });
        this.dialogRef.close();
      })
    })
    /* Error message */
    .catch((e) => {
      this.snackBar.open('Upload failed...', 'Close', { duration: 3000 });
    });
  }
}
