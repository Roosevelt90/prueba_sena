import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionFacComponent } from './aprobacion-fac.component';

describe('AprobacionFacComponent', () => {
  let component: AprobacionFacComponent;
  let fixture: ComponentFixture<AprobacionFacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobacionFacComponent]
    });
    fixture = TestBed.createComponent(AprobacionFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
