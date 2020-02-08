import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  // Add routes here
  // For auth guard: { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: UserProfileComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
