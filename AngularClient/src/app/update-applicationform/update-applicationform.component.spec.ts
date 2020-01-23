import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicationformComponent } from './update-applicationform.component';

describe('UpdateApplicationformComponent', () => {
  let component: UpdateApplicationformComponent;
  let fixture: ComponentFixture<UpdateApplicationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApplicationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
