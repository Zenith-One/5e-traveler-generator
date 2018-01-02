import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSelectionComponent } from './background-selection.component';

describe('BackgroundSelectionComponent', () => {
  let component: BackgroundSelectionComponent;
  let fixture: ComponentFixture<BackgroundSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
