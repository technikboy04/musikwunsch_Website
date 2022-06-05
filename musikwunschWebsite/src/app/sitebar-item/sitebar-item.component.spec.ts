import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitebarItemComponent } from './sitebar-item.component';

describe('SitebarItemComponent', () => {
  let component: SitebarItemComponent;
  let fixture: ComponentFixture<SitebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitebarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
