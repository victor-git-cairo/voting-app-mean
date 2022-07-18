import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPollComponent } from './new-poll.component';

describe('NewPollComponent', () => {
  let component: RegisterPollComponent;
  let fixture: ComponentFixture<RegisterPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
