import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLicenseComponent } from './send-license.component';

describe('SendLicenseComponent', () => {
  let component: SendLicenseComponent;
  let fixture: ComponentFixture<SendLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
