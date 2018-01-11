import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCounterComponent } from './index-counter.component';

describe('IndexCounterComponent', () => {
  let component: IndexCounterComponent;
  let fixture: ComponentFixture<IndexCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
