import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNotLogComponent } from './nav-bar-not-log.component';

describe('NavBarNotLogComponent', () => {
  let component: NavBarNotLogComponent;
  let fixture: ComponentFixture<NavBarNotLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNotLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarNotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
