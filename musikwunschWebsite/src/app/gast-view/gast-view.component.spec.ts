import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastViewComponent } from './gast-view.component';

describe('GastViewComponent', () => {
  let component: GastViewComponent;
  let fixture: ComponentFixture<GastViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
