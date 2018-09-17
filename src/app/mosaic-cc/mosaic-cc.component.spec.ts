import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicCcComponent } from './mosaic-cc.component';

describe('MosaicCcComponent', () => {
  let component: MosaicCcComponent;
  let fixture: ComponentFixture<MosaicCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
