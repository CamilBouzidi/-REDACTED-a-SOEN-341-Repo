# Unit Testing Guide

## Minimal Component Testing template

Comment out the existing `.spec.ts` code except for the imports

*This only works for components that do not take an argument in their constructor*

```typescript
// Usually already created for you
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { tempComponentName } from 'file/location';

// ==== Component Minimal Testing Setup ===
// describe('Test title', () => {dynamicFn});
describe ('tempComponentName (Minimal Testing)', () => {
  // Check if component can be created
  it('should create', () => {
    // Describe TestBed meta data by passing object to test
    TestBed.configureTestingModule({
      declarations: [ tempComponentName ]
    });
    // Create the object to test
    const fixture = TestBed.createComponent(tempComponentName);
    // Receive the object to test
    const component = fixture.componentInstance;
    // Test that the component has been created successfully
    expect(component).toBeDefined();
  });
});

```

## Minimal Service Testing Template

TBD
