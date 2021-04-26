import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobsComponent } from './new-jobs.component';

describe('NewJobsComponent', () => {
  let component: NewJobsComponent;
  let fixture: ComponentFixture<NewJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
