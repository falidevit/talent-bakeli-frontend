import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfilComponent } from './all-profil.component';

describe('AllProfilComponent', () => {
  let component: AllProfilComponent;
  let fixture: ComponentFixture<AllProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
