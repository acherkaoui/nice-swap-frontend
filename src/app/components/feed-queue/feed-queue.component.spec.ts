import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedQueueComponent } from './feed-queue.component';

describe('FeedQueueComponent', () => {
  let component: FeedQueueComponent;
  let fixture: ComponentFixture<FeedQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
