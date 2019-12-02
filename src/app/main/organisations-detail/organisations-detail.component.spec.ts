import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsDetailComponent } from './organisations-detail.component';

describe('OrganisationsDetailComponent', () => {
  let component: OrganisationsDetailComponent;
  let fixture: ComponentFixture<OrganisationsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
