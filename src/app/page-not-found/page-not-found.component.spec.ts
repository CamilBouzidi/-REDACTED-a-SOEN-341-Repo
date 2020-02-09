import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

/*
describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

// ==== Component Minimal Testing Setup ===
// describe('Test title', () => {dynamicFn});
describe('PageNotFoundComponent (Minimal Testing)', () => {
  // Check if component can be created
  it('should create', () => {
    // Describe TestBed meta data by passing object to test
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent]
    });
    // Create the object to test
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    // Receive the object to test
    const component = fixture.componentInstance;
    // Test that the component has been created successfully
    expect(component).toBeDefined();
  });
});
