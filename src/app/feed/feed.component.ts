import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.posts = afs.collection('posts').snapshotChanges().pipe(
      /* This mess of a code allows us to create the post object we desire
      by extracting only the data we want from the original post object that
      we receive, which is the post id and the post data. */
      map(post => post.map( postMetadata => {
        const data = postMetadata.payload.doc.data() as {};
        const id = postMetadata.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
