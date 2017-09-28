import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GantChartComponent } from './gant-chart.component';

describe('GantChartComponent', () => {
  let component: GantChartComponent;
  let fixture: ComponentFixture<GantChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GantChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GantChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
