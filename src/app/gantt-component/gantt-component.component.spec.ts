import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttComponentComponent } from './gantt-component.component';

describe('GanttComponentComponent', () => {
  let component: GanttComponentComponent;
  let fixture: ComponentFixture<GanttComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
