import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallejugadorComponent } from './detallejugador.component';

describe('DetallejugadorComponent', () => {
  let component: DetallejugadorComponent;
  let fixture: ComponentFixture<DetallejugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallejugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallejugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
