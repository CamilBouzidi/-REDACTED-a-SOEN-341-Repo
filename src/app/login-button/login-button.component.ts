// Adding back Alexander's work
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {

  constructor(public auth: AuthService, private router: Router) { }

  onLoginClick() {
    this.router.navigateByUrl('/user-profile');
  }

  onLogoutClick() {
    this.auth.signOut();
  }
}
