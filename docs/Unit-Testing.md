# Unit Testing 

## Unit Tests in the Project

This project is an Angular app which communicates to a Firebase server. As a result, we are not responsible for the testing of our back-end, and we use the Jasmine and Karma testing suite was used to individually test every major Angular component.

While Jasmine works great with a basic Angular project, a more complex project like ours which makes usage of libraries such a AngularFire and Material exponentially complexifies the writing of test codes. Stubs and mocks have to be used enxtensively in order to test our front-end.

Our project mostly consisted of interactions between our front-end app, and our back-end database, with very little data manipulation. Our tests cases reflect that by mostly verifying how our front-end components handle the data that they receive.

Given the short term nature of this project, some test cases might not appear that useful. Those tests case would definitely be more useful in a continuous improvement scenario.

Some test cases include: 
* should create
This case simply checks if a solitary instance of the component can be created. It is used to confirms that our test environment for a given component is set up properly.

* should obtain * from an observable
This case verifies that a variable that is necessary for the component to output the correct data is defined, and can be retreived.

* should disable button when *
This case verifies that a button cannot be clicked under a certain condition. This way, we ensure that we will not send wrong information to our back-end


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

The component can be tested using the command ``ng test``.
