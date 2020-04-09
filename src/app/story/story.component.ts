import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { map } from 'rxjs/internal/operators/map';
import { AngularFireFunctions } from '@angular/fire/functions';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  stories: Observable<any[]>;
  updateStories: any;

  constructor(afs: AngularFirestore, fns: AngularFireFunctions, private cookieService: CookieService) {
    this.updateStories = fns.httpsCallable('updateStories');
    this.stories = afs.collection('stories', ref => ref.orderBy('timestamp', 'desc')).snapshotChanges().pipe(
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

  ngOnInit(): void {
    const result = this.cookieService.get('updateStories');
    if (!result) {
      this.updateStories({}).subscribe();
      this.cookieService.set('updateStories', 'don\'t update', new Date((Date.now() + 3600 * 1000)));
    }
  }
}
