import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLandingComponent } from './page-landing.component';

/*
describe('PageLandingComponent', () => {
  let component: PageLandingComponent;
  let fixture: ComponentFixture<PageLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});*/

// ==== Component Minimal Testing Setup ===
// describe('Test title', () => {dynamicFn});
describe('Page Component (Minimal Testing)', () => {
  // Check if component can be created
  it('should create', () => {
    // Describe TestBed meta data by passing object to test
    TestBed.configureTestingModule({
      declarations: [ PageLandingComponent]
    });
    // Create the object to test
    const fixture = TestBed.createComponent(PageLandingComponent);
    // Receive the object to test
    const component = fixture.componentInstance;
    // Test that the component has been created successfully
    expect(component).toBeDefined();
  });
});
