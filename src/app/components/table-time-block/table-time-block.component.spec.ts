import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTimeBlockComponent } from './table-time-block.component';

describe('TableTimeBlockComponent', () => {
  let component: TableTimeBlockComponent;
  let fixture: ComponentFixture<TableTimeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTimeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTimeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
