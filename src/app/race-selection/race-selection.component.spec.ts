import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSelectionComponent } from './race-selection.component';

describe('RaceSelectionComponent', () => {
  let component: RaceSelectionComponent;
  let fixture: ComponentFixture<RaceSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
