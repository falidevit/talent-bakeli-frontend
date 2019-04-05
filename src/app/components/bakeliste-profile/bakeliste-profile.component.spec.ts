import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakelisteProfileComponent } from './bakeliste-profile.component';

describe('BakelisteProfileComponent', () => {
  let component: BakelisteProfileComponent;
  let fixture: ComponentFixture<BakelisteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakelisteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakelisteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
