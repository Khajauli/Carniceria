import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCarneComponent } from './ingresar-carne.component';

describe('IngresarCarneComponent', () => {
  let component: IngresarCarneComponent;
  let fixture: ComponentFixture<IngresarCarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarCarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
