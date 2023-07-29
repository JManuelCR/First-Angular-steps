import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindigPracticeComponent } from './data-bindig-practice.component';

describe('DataBindigPracticeComponent', () => {
  let component: DataBindigPracticeComponent;
  let fixture: ComponentFixture<DataBindigPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindigPracticeComponent]
    });
    fixture = TestBed.createComponent(DataBindigPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
