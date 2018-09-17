import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComunidadComponent } from './carousel-comunidad.component';

describe('CarouselComunidadComponent', () => {
  let component: CarouselComunidadComponent;
  let fixture: ComponentFixture<CarouselComunidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComunidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
