import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CleanNavbarComponent } from './clean-navbar.component';
import { ThemePickerModule } from '../../utils/theme-picker';

describe('CleanNavbarComponent', () => {
  let component: CleanNavbarComponent;
  let fixture: ComponentFixture<CleanNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ThemePickerModule,
        RouterTestingModule
      ],
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
