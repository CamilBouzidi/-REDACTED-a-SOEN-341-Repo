import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { NewPostDialogComponent } from './new-post-dialog.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from 'src/app/core/auth.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('NewPostDialogComponent', () => {
  let component: NewPostDialogComponent;
  let fixture: ComponentFixture<NewPostDialogComponent>;
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

    const AngularFireStorageMock = {
      ref: () => {
        return {
          put: () => of({})
        };
      }
    };

    const AngularFireFunctionsMock = {
      httpsCallable: () => {
        return () => of({});
      }
    };

    const MatSnackBarMock = {
      open: () => {}
    };

    TestBed.configureTestingModule({
      declarations: [ NewPostDialogComponent ],
      imports: [ MatSnackBarModule, MatDialogModule, FormsModule ],
      providers: [
        { provide: AuthService, useValue: AuthServiceMock },
        { provide: AngularFireStorage, useValue: AngularFireStorageMock },
        { provide: AngularFireFunctions, useValue: AngularFireFunctionsMock },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatSnackBar, useValue: MatSnackBarMock }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(NewPostDialogComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;

      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send if image empty', () => {
    component.imageFile = '';
    expect(de.query(By.css('.send')).nativeElement.disabled).toBeTruthy();
  });

});
