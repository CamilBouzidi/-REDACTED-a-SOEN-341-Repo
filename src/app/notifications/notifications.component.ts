import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  user;
  notifications;

  constructor(private auth: AuthService, private afs: AngularFirestore) {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.notifications = this.afs.collection(`users/${user.uid}/notifications`, ref =>
        ref.orderBy('timestamp', 'desc').limit(10))
        .valueChanges();
      }
    });
  }
}
