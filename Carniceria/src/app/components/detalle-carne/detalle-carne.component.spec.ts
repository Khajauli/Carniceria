import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarneComponent } from './detalle-carne.component';

describe('DetalleCarneComponent', () => {
  let component: DetalleCarneComponent;
  let fixture: ComponentFixture<DetalleCarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
