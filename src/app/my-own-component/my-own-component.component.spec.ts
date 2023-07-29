import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnComponentComponent } from './my-own-component.component';

describe('MyOwnComponentComponent', () => {
  let component: MyOwnComponentComponent;
  let fixture: ComponentFixture<MyOwnComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOwnComponentComponent]
    });
    fixture = TestBed.createComponent(MyOwnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
