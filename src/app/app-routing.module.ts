import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { UserResolver} from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AppComponent} from './app.component';
import {AuthService} from './core/auth.service';
import {UserService} from './core/user.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
