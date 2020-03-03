import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent {
  @Input() uid: string;
  followCallable: Function;
  unfollowCallable: Function;
  following = null;
  disable = false;

  constructor(
    private fns: AngularFireFunctions,
    private auth: AuthService,
    private cdRef : ChangeDetectorRef
  ) {
    this.followCallable = fns.httpsCallable('follow');
    this.unfollowCallable = fns.httpsCallable('unfollow');
    this.auth.user$.subscribe(user => {
      this.following = user.following.includes(this.uid);
    });
  }

  follow = () => {
    this.disable = true;
    this.followCallable({
      uid: this.uid
    }).subscribe((response) => {
      console.log(response);
      this.disable = false;
      this.cdRef.detectChanges(); // Without this, the disable sometimes fails to get updated.
    });
  }

  unfollow = () => {
    this.disable = true;
    this.unfollowCallable({
      uid: this.uid
    }).subscribe((response) => {
      console.log(response);
      this.disable = false;
      this.cdRef.detectChanges(); // Without this, the disable sometimes fails to get updated.
    });
  }
}
