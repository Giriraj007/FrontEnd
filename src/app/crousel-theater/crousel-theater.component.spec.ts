import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselTheaterComponent } from './crousel-theater.component';

describe('CrouselTheaterComponent', () => {
  let component: CrouselTheaterComponent;
  let fixture: ComponentFixture<CrouselTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrouselTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrouselTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
