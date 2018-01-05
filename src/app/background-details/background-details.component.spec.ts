import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDetailsComponent } from './background-details.component';

describe('BackgroundDetailsComponent', () => {
  let component: BackgroundDetailsComponent;
  let fixture: ComponentFixture<BackgroundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
