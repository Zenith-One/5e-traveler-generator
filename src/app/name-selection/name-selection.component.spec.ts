import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSelectionComponent } from './name-selection.component';

describe('NameSelectionComponent', () => {
  let component: NameSelectionComponent;
  let fixture: ComponentFixture<NameSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
