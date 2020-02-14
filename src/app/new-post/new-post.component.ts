import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostDialogComponent } from './new-post-dialog/new-post-dialog.component';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  user: Observable<any>;

  constructor(private dialog: MatDialog, public auth: AuthService) {
    this.getUser();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewPostDialogComponent, { width: '700px' });
    dialogRef.disableClose = true;
  }

  getUser(): void {
    this.auth.user$.subscribe(user => this.user = user);
  }
}
