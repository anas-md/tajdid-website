import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcCardComponent } from './nfc-card.component';

describe('NfcCardComponent', () => {
  let component: NfcCardComponent;
  let fixture: ComponentFixture<NfcCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfcCardComponent]
    });
    fixture = TestBed.createComponent(NfcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
