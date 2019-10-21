import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsStatisticsComponent } from './emotions-statistics.component';

describe('EmotionsStatisticsComponent', () => {
  let component: EmotionsStatisticsComponent;
  let fixture: ComponentFixture<EmotionsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
