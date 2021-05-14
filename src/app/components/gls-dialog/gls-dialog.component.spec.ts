import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlsDialogComponent } from './gls-dialog.component';

describe('GlsDialogComponent', () => {
  let component: GlsDialogComponent;
  let fixture: ComponentFixture<GlsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
