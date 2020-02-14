import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import 'firebase/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.scss']
})
export class NewPostDialogComponent {
  imageFile: any;
  image: string | ArrayBuffer;
  caption: string;
  user: Observable<any>;
  uploading = false;

  constructor(
    private dialogRef: MatDialogRef<NewPostDialogComponent>,
    private afStorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    public auth: AuthService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  handleImageInput = (input): void => {
    if (input.files.length === 0) {
      return; /* Return if no file selected */
    }

    this.imageFile = input.files[0];
    const fr = new FileReader();
    fr.onload = () => {
      this.image = fr.result;
    };
    fr.readAsDataURL(this.imageFile);
  }

  uploadImage = (): void => {
    this.uploading = true;
    const randomId = Math.random().toString(36).substring(2);
    const imageUrl = `images/${randomId}`;

    /* Uploading the image as a file */
    const ref = this.afStorage.ref(imageUrl);
    ref.put(this.imageFile)

    /* Uploading the post information (imageUrl, caption and uid) */
    .then(() => {
      this.firestore.collection('posts').add({
        imageUrl,
        caption: this.caption || '',
        user: this.user
      })

      /* Success message */
      .then(() => {
        this.snackBar.open('Upload successful!', 'Close', { duration: 3000 });
        this.dialogRef.close();
      });
    })
    /* Error message */
    .catch((e) => {
      this.snackBar.open('Upload failed...', 'Close', { duration: 3000 });
      this.uploading = false;
    });
  }

  /**
   * This resizes the textarea so that it always matches the height of the actual text.
   */
  resizeTextarea = (textarea): void => {
    textarea.style.height = '0px'; // Shrinks it
    textarea.style.height = `${textarea.scrollHeight}px`; // Takes the minimum height
  }
}
