import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCardUserComponent } from './music-card-user.component';

describe('MusicCardUserComponent', () => {
  let component: MusicCardUserComponent;
  let fixture: ComponentFixture<MusicCardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicCardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
