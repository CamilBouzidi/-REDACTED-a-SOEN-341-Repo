import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  stories: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.stories = afs.collection('stories', ref => ref.orderBy('uploadTimestamp', 'desc')).snapshotChanges().pipe(
      /* This mess of a code allows us to create the story object we desire
      by extracting only the data we want from the original story object that
      we receive, which is the story id and the story data. */
      map(story => story.map( storyMetadata => {
        const data = storyMetadata.payload.doc.data() as {};
        const id = storyMetadata.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
