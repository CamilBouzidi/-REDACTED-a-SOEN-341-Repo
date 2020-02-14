import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private userComponent: UserComponent) { }

  ngOnInit(): void {
  }

  onLogoutClick() {
    this.userComponent.logout();
  }
}
