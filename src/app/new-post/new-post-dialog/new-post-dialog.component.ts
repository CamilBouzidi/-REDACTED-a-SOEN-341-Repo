import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { v4 as getUuid } from 'uuid';
import { AngularFireFunctions } from '@angular/fire/functions';

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
  newPost: any;
  uploading = false;

  constructor(
    private dialogRef: MatDialogRef<NewPostDialogComponent>,
    private afStorage: AngularFireStorage,
    private fns: AngularFireFunctions,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
    this.newPost = this.fns.httpsCallable('newPost');
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
    const uuid = getUuid();
    const data = {
      uuid,
      caption: this.caption || ''
    };

    /* Uploading the image as a file */
    const ref = this.afStorage.ref(`images/${uuid}`);
    ref.put(this.imageFile)

    /* Uploading the data to associate the image to the user */
    .then(() => {
      this.newPost(data).subscribe();
      
      /* Success message */
      this.snackBar.open('Upload successful!', 'Close', { duration: 3000 });
      this.dialogRef.close();
    })
    /* Error message */
    .catch(() => {
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
