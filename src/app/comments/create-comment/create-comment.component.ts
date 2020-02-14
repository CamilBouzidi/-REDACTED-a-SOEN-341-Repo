import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent {
  @Input() data: any;
  user: Observable<any>;
  comment: string;
  uploading = false;

  constructor( private afs: AngularFirestore, private snackBar: MatSnackBar, private auth: AuthService) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  submitComment = (): void => {
    this.uploading = true;
    this.afs.collection(`posts/${this.data.id}/comments`).add({
      author: this.user,
      comment: this.comment
    })
    /* Success message */
    .then(() => {
      this.snackBar.open('Upload successful!', 'Close', { duration: 3000 });
      this.comment = ''; // This resets the comment form
      this.uploading = false;
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
