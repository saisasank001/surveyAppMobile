import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListLoginPage } from './check-list-login.page';

describe('CheckListLoginPage', () => {
  let component: CheckListLoginPage;
  let fixture: ComponentFixture<CheckListLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
