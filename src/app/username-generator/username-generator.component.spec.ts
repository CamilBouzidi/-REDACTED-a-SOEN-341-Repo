import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameGeneratorComponent } from './username-generator.component';

describe('UsernameGeneratorComponent', () => {
  let component: UsernameGeneratorComponent;
  let fixture: ComponentFixture<UsernameGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
