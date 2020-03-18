import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { v4 as getUuid } from 'uuid';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Timestamp } from '@google-cloud/firestore';

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
  uploadTime: number;
  cutoff: number;
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
    this.uploadTime = Date.now();
    this.cutoff = this.uploadTime + this.expiryTime*60*60*1000;
    const uuid = getUuid();
    if (this.duration > 30 || this.duration < 1){
      this.duration = 30;
    }
    if (this.expiryTime > 48 || this.expiryTime < 1){
      this.expiryTime = 48;
    }
    const data = {
      uuid,
      duration: this.duration || 10,
      expiryTime: this.expiryTime || 24,
      uploadTime: this.uploadTime,
      cutoff: this.cutoff
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
