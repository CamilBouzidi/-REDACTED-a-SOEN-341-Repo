import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FollowButtonComponent } from './follow-button.component';

import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { of } from 'rxjs';


describe('FollowButtonComponent', () => {
  let component: FollowButtonComponent;
  let fixture: ComponentFixture<FollowButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    /* Initializing mock services */
    const AuthServiceMock = {
      user$: {
        subscribe: () => {
          const user = {
            uid: 1,
            following: 2
          };
          return of(user);
        }
      }
    }
    
    const AngularFireFunctionsMock = {
      httpsCallable: (fnsName) => {
        switch(fnsName) {
          case 'follow':
            return () => {
              component.following = true;
              return of(true);
            }
          case 'unfollow': 
           return () => {
              component.following = false;
              return of(true);
            }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [ FollowButtonComponent ],
      providers: [
        { provide: AuthService, useValue: AuthServiceMock },
        { provide: AngularFireFunctions, useValue: AngularFireFunctionsMock },
        { provide: ChangeDetectorRef }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    // Expected input
    component.uid = '1';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should begin not following', () => {
    expect(component.following).toBeFalsy();
  })

  it('should be following after following', () => {
    component.follow();
    expect(component.following).toBeTrue();
  })

  it('should not be following after unfollowing', () => {
    component.unfollow();
    expect(component.following).toBeFalse();
  })


});
