import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarBarLoginComponent } from './nar-bar-login.component';

describe('NarBarLoginComponent', () => {
  let component: NarBarLoginComponent;
  let fixture: ComponentFixture<NarBarLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarBarLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
