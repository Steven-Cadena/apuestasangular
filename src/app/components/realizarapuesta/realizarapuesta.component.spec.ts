import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarapuestaComponent } from './realizarapuesta.component';

describe('RealizarapuestaComponent', () => {
  let component: RealizarapuestaComponent;
  let fixture: ComponentFixture<RealizarapuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarapuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarapuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
