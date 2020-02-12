import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostDialogComponent } from './new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewPostDialogComponent, { width: '700px' });
    dialogRef.disableClose = true;
  }
}
