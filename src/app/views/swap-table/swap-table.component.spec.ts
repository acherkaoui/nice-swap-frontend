import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapTableComponent } from './swap-table.component';

describe('SwapTableComponent', () => {
  let component: SwapTableComponent;
  let fixture: ComponentFixture<SwapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
