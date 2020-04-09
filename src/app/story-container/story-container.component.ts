import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewStoryDialogComponent } from './new-story-dialog/new-story-dialog.component';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-story-container',
  templateUrl: './story-container.component.html',
  styleUrls: ['./story-container.component.scss']
})
export class StoryContainerComponent {
  user: Observable<any>;
  constructor(private dialog: MatDialog, public auth: AuthService) {
    this.getUser();
   }

  openStoryDialog(): void {
    const dialogStoryRef = this.dialog.open(NewStoryDialogComponent, { width: '700px' });
    dialogStoryRef.disableClose = true;
  }

  getUser(): void {
    this.auth.user$.subscribe(user => this.user = user);
  }

}
