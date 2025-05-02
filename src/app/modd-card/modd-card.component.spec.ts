import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdCardComponent } from './modd-card.component';

describe('ModdCardComponent', () => {
  let component: ModdCardComponent;
  let fixture: ComponentFixture<ModdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
