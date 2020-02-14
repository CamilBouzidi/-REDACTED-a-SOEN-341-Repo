import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input() data: any;
  imageUrl: Observable<string>;
  comments: Observable<any[]>;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.imageUrl = this.storage.ref(this.data.imageUrl).getDownloadURL();
    this.comments = this.afs.collection(`posts/${this.data.id}/comments`).valueChanges();
  }

}
