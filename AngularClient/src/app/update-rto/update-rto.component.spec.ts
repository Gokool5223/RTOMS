import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRtoComponent } from './update-rto.component';

describe('UpdateRtoComponent', () => {
  let component: UpdateRtoComponent;
  let fixture: ComponentFixture<UpdateRtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
