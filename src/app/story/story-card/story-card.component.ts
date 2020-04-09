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
  underDuration: boolean = false;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.imageUrl = this.storage.ref(this.data.imageUrl).getDownloadURL();


    setTimeout(() => {
      this.underDuration = true;
        }, (this.data.duration * 1000));
    
  }

}
