import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsTodayComponent } from './emotions-today.component';

describe('EmotionsTodayComponent', () => {
  let component: EmotionsTodayComponent;
  let fixture: ComponentFixture<EmotionsTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
