import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CommentComponent } from './comment.component';


describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    // Expected input
    component.comment = {
      author: {
        displayName: 'John Smith'
      },
      comment: 'This is a test comment'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only show display name inside the author span', () => {
    expect(de.query(By.css('.author')).nativeElement.innerText).toBe('John Smith');
  });

  it('should show the comment inside the comment span', () => {
    expect(de.query(By.css('.comment')).nativeElement.innerText).toContain('This is a test comment');
  });

});
