import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSentimentAnalysisComponent } from './social-media-sentiment-analysis.component';

describe('SocialMediaSentimentAnalysisComponent', () => {
  let component: SocialMediaSentimentAnalysisComponent;
  let fixture: ComponentFixture<SocialMediaSentimentAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaSentimentAnalysisComponent]
    });
    fixture = TestBed.createComponent(SocialMediaSentimentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
