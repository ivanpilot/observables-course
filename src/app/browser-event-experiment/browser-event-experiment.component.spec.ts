import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventExperimentComponent } from './browser-event-experiment.component';

describe('BrowserEventExperimentComponent', () => {
  let component: BrowserEventExperimentComponent;
  let fixture: ComponentFixture<BrowserEventExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
