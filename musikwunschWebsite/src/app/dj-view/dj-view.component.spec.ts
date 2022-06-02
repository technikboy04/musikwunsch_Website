import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjViewComponent } from './dj-view.component';

describe('DjViewComponent', () => {
  let component: DjViewComponent;
  let fixture: ComponentFixture<DjViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
