import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoHomeComponent } from './rto-home.component';

describe('RtoHomeComponent', () => {
  let component: RtoHomeComponent;
  let fixture: ComponentFixture<RtoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
