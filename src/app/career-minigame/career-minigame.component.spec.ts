import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerMinigameComponent } from './career-minigame.component';

describe('CareerMinigameComponent', () => {
  let component: CareerMinigameComponent;
  let fixture: ComponentFixture<CareerMinigameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerMinigameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerMinigameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
