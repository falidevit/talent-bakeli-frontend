import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModelBakeliComponent } from './cv-model-bakeli.component';

describe('CvModelBakeliComponent', () => {
  let component: CvModelBakeliComponent;
  let fixture: ComponentFixture<CvModelBakeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModelBakeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModelBakeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
