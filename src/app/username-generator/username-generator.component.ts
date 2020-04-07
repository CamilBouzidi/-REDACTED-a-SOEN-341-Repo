import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-username-generator',
  templateUrl: './username-generator.component.html',
  styleUrls: ['./username-generator.component.scss']
})
export class UsernameGeneratorComponent implements OnInit {

  /*
  The behaviour should be that this component offers a form, which, upon update and validation, changes the username of the user
   */

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  public isUnique(userName: string): boolean {
    // TODO Validation behaviour

    return true;
  }

  public modifyDisplayName(userName: string) {
    let user = this.auth.user$;

    if (user) {
    }
  }
}
