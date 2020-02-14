// Adding back Alexander's work
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const loginButton = document.getElementById('login_button');
    loginButton.style.display = 'block';
  }

  onLoginClick() {
    this.router.navigateByUrl('/user-profile');
  }

  onLogoutClick() {
    this.auth.signOut();
  }
}
