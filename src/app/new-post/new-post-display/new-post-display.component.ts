import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'firebase/storage';
import 'firebase/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-post-display',
  templateUrl: './new-post-display.component.html',
  styleUrls: ['./new-post-display.component.scss']
})
export class NewPostDisplayComponent implements OnInit {
  imageFile: any;
  image: string | ArrayBuffer
  caption: string;

  constructor(
    private afStorage: AngularFireStorageModule,
    private firestore: AngularFirestore
  ) { }

  getImage = (): void => {
    
  }

  ngOnInit(): void {
  }

}
