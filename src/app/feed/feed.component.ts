import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.posts = firestore.collection('posts').valueChanges();;
  }
  ngOnInit(): void {
  }
}
