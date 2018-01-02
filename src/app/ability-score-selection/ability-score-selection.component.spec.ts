import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreSelectionComponent } from './ability-score-selection.component';

describe('AbilityScoreSelectionComponent', () => {
  let component: AbilityScoreSelectionComponent;
  let fixture: ComponentFixture<AbilityScoreSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityScoreSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
