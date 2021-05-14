import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlsExemplesComponent } from './gls-exemples.component';

describe('GlsExemplesComponent', () => {
  let component: GlsExemplesComponent;
  let fixture: ComponentFixture<GlsExemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlsExemplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlsExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
