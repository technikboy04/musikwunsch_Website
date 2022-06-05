import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitebarDjComponent } from './sitebar-dj.component';

describe('SitebarDjComponent', () => {
  let component: SitebarDjComponent;
  let fixture: ComponentFixture<SitebarDjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitebarDjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitebarDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
