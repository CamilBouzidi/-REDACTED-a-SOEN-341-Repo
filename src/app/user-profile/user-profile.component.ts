import {Component, Input} from '@angular/core';
import { AuthService } from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  usernameInput: string;
  constructor(
      public auth: AuthService,
      private afs: AngularFirestore,
  ) {}

  setUsername(uid) {
    this.afs.collection('users').doc(uid).update({
      username: this.usernameInput
    });
    this.usernameInput = '';
  }
}


