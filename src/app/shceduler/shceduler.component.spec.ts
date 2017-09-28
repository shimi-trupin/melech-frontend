import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShcedulerComponent } from './shceduler.component';

describe('ShcedulerComponent', () => {
  let component: ShcedulerComponent;
  let fixture: ComponentFixture<ShcedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShcedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShcedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
