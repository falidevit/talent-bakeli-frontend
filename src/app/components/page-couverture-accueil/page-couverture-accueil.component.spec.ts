import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCouvertureAccueilComponent } from './page-couverture-accueil.component';

describe('PageCouvertureAccueilComponent', () => {
  let component: PageCouvertureAccueilComponent;
  let fixture: ComponentFixture<PageCouvertureAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCouvertureAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCouvertureAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
