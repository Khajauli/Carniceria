import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCarneComponent } from './editar-carne.component';

describe('EditarCarneComponent', () => {
  let component: EditarCarneComponent;
  let fixture: ComponentFixture<EditarCarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
