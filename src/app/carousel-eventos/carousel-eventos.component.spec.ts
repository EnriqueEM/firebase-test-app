import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEventosComponent } from './carousel-eventos.component';

describe('CarouselEventosComponent', () => {
  let component: CarouselEventosComponent;
  let fixture: ComponentFixture<CarouselEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
