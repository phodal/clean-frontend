import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanNavbarComponent } from './clean-navbar.component';

describe('CleanNavbarComponent', () => {
  let component: CleanNavbarComponent;
  let fixture: ComponentFixture<CleanNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
