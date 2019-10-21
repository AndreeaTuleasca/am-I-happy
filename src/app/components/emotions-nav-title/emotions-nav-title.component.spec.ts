import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsNavTitleComponent } from './emotions-nav-title.component';

describe('EmotionsNavTitleComponent', () => {
  let component: EmotionsNavTitleComponent;
  let fixture: ComponentFixture<EmotionsNavTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsNavTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsNavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
