import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';

import {AuthGuard} from './core/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppComponent} from './app.component';


const routes: Routes = [
  // Add routes here
  // For auth guard: { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] }
  // { path: 'landing', component: NotesListComponent,  canActivate: [AuthGuard] },
  {path: 'user-profile', component: UserProfileComponent},
  // {path: 'landing', component: PageLandingComponent},
  {path: '404', component: PageNotFoundComponent},
  // Redirects
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
