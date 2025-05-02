import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTitleComponent } from './mood-title.component';

describe('MoodTitleComponent', () => {
  let component: MoodTitleComponent;
  let fixture: ComponentFixture<MoodTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
