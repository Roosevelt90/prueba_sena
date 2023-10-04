import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaFacturacionComponent } from './sistema-facturacion.component';

describe('SistemaFacturacionComponent', () => {
  let component: SistemaFacturacionComponent;
  let fixture: ComponentFixture<SistemaFacturacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemaFacturacionComponent]
    });
    fixture = TestBed.createComponent(SistemaFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
