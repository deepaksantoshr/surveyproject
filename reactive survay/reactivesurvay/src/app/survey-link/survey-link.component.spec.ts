import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyLinkComponent } from './survey-link.component';

describe('SurveyLinkComponent', () => {
  let component: SurveyLinkComponent;
  let fixture: ComponentFixture<SurveyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
