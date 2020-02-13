import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input() data: any;
  imageUrl: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const ref = this.storage.ref(this.data.imageUrl);
    this.imageUrl = ref.getDownloadURL();
  }
}
