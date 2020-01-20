import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamModuleComponent } from './manage-exam-module.component';

describe('ManageExamModuleComponent', () => {
  let component: ManageExamModuleComponent;
  let fixture: ComponentFixture<ManageExamModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExamModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
