import {async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { CreateCommentComponent } from './create-comment.component';

import { AuthService } from 'src/app/core/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('CreateCommentComponent', () => {
  let component: CreateCommentComponent;
  let fixture: ComponentFixture<CreateCommentComponent>;
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
    };

    const AngularFirestoreMock = {
      collection: () => {
        return { add: () => true };
      }
    };

    const MatSnackBarMock = {
      open: () => {}
    };
    

    TestBed.configureTestingModule({
      declarations: [ CreateCommentComponent ],
      imports: [ MatSnackBarModule ],
      providers: [
        { provide: AuthService, useValue: AuthServiceMock },
        { provide: AngularFirestore, useValue: AngularFirestoreMock },
        { provide: MatSnackBar, useValue: MatSnackBarMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    // Mock input
    component.data = { id: 123456789 };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when empty comment', () => {
    component.comment = '';
    expect(de.query(By.css('button')).nativeElement.disabled).toBeTruthy();
  });
});
