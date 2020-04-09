import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

import { NotificationsComponent } from './notifications.component';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../core/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


/* Mock services */
const AuthServiceMock = {
  user$: of({uid: 123})
};

const AngularFirestoreMock = {
  collection: () => {
    return {
      valueChanges: () => of([{
        type: 'newPost',
        user: {
          uid: 222,
          displayName: 'Jack Black',
          photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mCiim9TzdHHw8BmFQhNoKl879-GeH3qz6aLyO3mtA'
        }
      }])
    };
  }
};

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ],
      imports: [ MatButtonModule, MatIconModule, MatMenuModule, BrowserAnimationsModule ],
      providers: [
        { provide: AuthService, useValue: AuthServiceMock },
        { provide: AngularFirestore, useValue: AngularFirestoreMock }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(NotificationsComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;

      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain notifications from an observable', () => {
    component.notifications.subscribe(notifications => {
      expect(notifications).toBeDefined();
    });
  });
});
