import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicDigitalComponent } from './islamic-digital.component';

describe('IslamicDigitalComponent', () => {
  let component: IslamicDigitalComponent;
  let fixture: ComponentFixture<IslamicDigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IslamicDigitalComponent]
    });
    fixture = TestBed.createComponent(IslamicDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
