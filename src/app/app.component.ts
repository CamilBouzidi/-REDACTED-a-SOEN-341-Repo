import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private postsCollection: AngularFirestoreCollection<any>;

  title = 'ShutterFeed';
  posts: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.postsCollection = afs.collection<any>('posts');
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  output(post) {
    console.log(post);
  }
}
