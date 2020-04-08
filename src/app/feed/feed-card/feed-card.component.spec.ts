import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FeedCardComponent } from './feed-card.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';


/* Mock services */
const AngularFireStorageMock = {
  ref: () => {
    return {
      getDownloadURL: () => of(`https://firebasestorage.googleapis.com/v0/b/shutterfeed-soen341.appspot.com/
      o/images%2Ff52d6e39-9fa9-42d0-987f-1cb965e08dd4?alt=media&token=c4d88ead-e926-4298-9bff-9e1749f94a85`)
    };
  }
};

const AngularFirestoreMock = {
  collection: () => {
    return {
      valueChanges: () => of([])
    };
  }
};


describe('FeedCardComponent', () => {
  let component: FeedCardComponent;
  let fixture: ComponentFixture<FeedCardComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FeedCardComponent ],
      imports: [ MatCardModule ],
      providers: [
        { provide: AngularFireStorage, useValue: AngularFireStorageMock },
        { provide: AngularFirestore, useValue: AngularFirestoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    // Expected input
    component.data = {
      caption: 'This is a caption',
      user: {
        displayName: 'John Smith',
        email: 'john.smith@gmail.com',
        photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mCiim9TzdHHw8BmFQhNoKl879-GeH3qz6aLyO3mtA'
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user data', () => {
    expect(component.data).toBeTruthy();
  });

  it('should obtain image URL from an observable', () => {
    component.imageUrl.subscribe(imageUrl => {
      expect(imageUrl).toBeDefined();
    });
  });
});
