import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

/* Firebase imports */
import { AngularFireModule} from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

/* Other imports */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostDialogComponent } from './new-post/new-post-dialog/new-post-dialog.component';
import { CreateCommentComponent } from './comments/create-comment/create-comment.component';
import { CommentComponent } from './comments/comment/comment.component';
import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed/feed-card/feed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    PageLandingComponent,
    NewPostComponent,
    NewPostDialogComponent,
    CreateCommentComponent,
    CommentComponent,
    FeedComponent,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,

    /* Firebase */
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    /* Material */
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
