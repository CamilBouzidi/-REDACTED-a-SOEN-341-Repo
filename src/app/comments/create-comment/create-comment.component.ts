import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent {
  comment: string;
  uid: any;

  constructor( private afs: AngularFirestore ) {}

  submitComment = (): void => {
    this.afs.collection("posts/lJzVHUrlRVC0KFTdlI9L/comments").add({
      author: 'no one',
      comment: this.comment
    })
    return;
  }

  resizeTextarea = (textarea): void => {
    textarea.style.height = "0px"; // Shrinks it
    textarea.style.height = `${textarea.scrollHeight}px`; // Takes the minimum height
  }
}
