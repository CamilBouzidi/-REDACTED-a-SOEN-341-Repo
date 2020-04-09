import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { v4 as getUuid } from 'uuid';
import { AngularFireFunctions } from '@angular/fire/functions';
// import { Timestamp } from '@google-cloud/firestore';

@Component({
  selector: 'app-new-story-dialog',
  templateUrl: './new-story-dialog.component.html',
  styleUrls: ['./new-story-dialog.component.scss']
})
export class NewStoryDialogComponent {
  imageFile: any;
  image: string | ArrayBuffer;
  duration: number;
  expiryTime: number;
  user: Observable<any>;
  newStory: any;
  uploadTimestamp: number;
  cutoffTimestamp: number;
  uploading = false;

  constructor(
    private dialogRef: MatDialogRef<NewStoryDialogComponent>,
    private afStorage: AngularFireStorage,
    private fns: AngularFireFunctions,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
    this.newStory = this.fns.httpsCallable('newStory');
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
    const uploadDate: Date = new Date();
    this.uploadTimestamp = uploadDate.getTime();
    const cutoffDate: Date = new Date(uploadDate);
    const uuid = getUuid();
    if (this.duration > 30 || this.duration < 1 || isNaN(this.duration)) {
      this.duration = 30;
    }
    if (this.expiryTime > 48 || this.expiryTime < 1 || isNaN(this.expiryTime)) {
      this.expiryTime = 48;
    }
    cutoffDate.setHours(cutoffDate.getHours() + this.expiryTime);
    const data = {
      uuid,
      duration: this.duration || 10,
      expiryTime: this.expiryTime || 48,
      cutoffTimestamp: this.cutoffTimestamp,
      uploadTimestamp: this.uploadTimestamp
    };

    /* Uploading the image as a file */
    const ref = this.afStorage.ref(`storiesImages/${uuid}`);
    ref.put(this.imageFile)

    /* Uploading the data to associate the image to the user */
    .then(() => {
      this.newStory(data).subscribe();
      
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
}
