import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakelistByDomainComponent } from './bakelist-by-domain.component';

describe('BakelistByDomainComponent', () => {
  let component: BakelistByDomainComponent;
  let fixture: ComponentFixture<BakelistByDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakelistByDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakelistByDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
