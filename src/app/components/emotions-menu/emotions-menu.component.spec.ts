import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsMenuComponent } from './emotions-menu.component';

describe('EmotionsMenuComponent', () => {
  let component: EmotionsMenuComponent;
  let fixture: ComponentFixture<EmotionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
