import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNovedadesComponent } from './grid-novedades.component';

describe('GridNovedadesComponent', () => {
  let component: GridNovedadesComponent;
  let fixture: ComponentFixture<GridNovedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNovedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
