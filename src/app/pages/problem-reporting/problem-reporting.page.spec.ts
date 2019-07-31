import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemReportingPage } from './problem-reporting.page';

describe('ProblemReportingPage', () => {
  let component: ProblemReportingPage;
  let fixture: ComponentFixture<ProblemReportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemReportingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemReportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
