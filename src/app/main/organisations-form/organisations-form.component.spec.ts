import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsFormComponent } from './organisations-form.component';

describe('OrganisationsFormComponent', () => {
  let component: OrganisationsFormComponent;
  let fixture: ComponentFixture<OrganisationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
