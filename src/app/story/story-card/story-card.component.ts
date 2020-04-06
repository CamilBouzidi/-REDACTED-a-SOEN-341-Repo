import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  @Input() data: any;
  imageUrl: Observable<string>;
  isExpired: boolean;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.imageUrl = this.storage.ref(this.data.imageUrl).getDownloadURL();
    const current = new Date();
    if (current > (this.data.cutoffDate)){
      this.isExpired = true;
    } else {
      this.isExpired = false;
    }
  }

}
