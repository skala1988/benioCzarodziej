import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLimitComponent } from './change-limit.component';

describe('ChangeLimitComponent', () => {
  let component: ChangeLimitComponent;
  let fixture: ComponentFixture<ChangeLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
