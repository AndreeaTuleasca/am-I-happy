import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionAddComponent } from './emotion-add.component';

describe('EmotionAddComponent', () => {
  let component: EmotionAddComponent;
  let fixture: ComponentFixture<EmotionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
