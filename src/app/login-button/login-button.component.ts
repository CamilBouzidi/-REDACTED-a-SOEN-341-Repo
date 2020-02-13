import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.router.navigateByUrl('/login');
  }
}
