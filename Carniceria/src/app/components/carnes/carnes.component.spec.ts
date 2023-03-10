import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnesComponent } from './carnes.component';

describe('CarnesComponent', () => {
  let component: CarnesComponent;
  let fixture: ComponentFixture<CarnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
