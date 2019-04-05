import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBakelisteComponent } from './detail-bakeliste.component';

describe('DetailBakelisteComponent', () => {
  let component: DetailBakelisteComponent;
  let fixture: ComponentFixture<DetailBakelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBakelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBakelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
