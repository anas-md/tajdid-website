import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserServiceComponent } from './add-user-service.component';

describe('AddUserServiceComponent', () => {
  let component: AddUserServiceComponent;
  let fixture: ComponentFixture<AddUserServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserServiceComponent]
    });
    fixture = TestBed.createComponent(AddUserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
