import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodCardComponent } from './mood-card.component';

describe('MoodCardComponent', () => {
  let component: MoodCardComponent;
  let fixture: ComponentFixture<MoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
