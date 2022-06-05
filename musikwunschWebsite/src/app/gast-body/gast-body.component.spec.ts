import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastBodyComponent } from './gast-body.component';

describe('GastBodyComponent', () => {
  let component: GastBodyComponent;
  let fixture: ComponentFixture<GastBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
