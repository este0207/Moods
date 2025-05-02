import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescFormComponent } from './desc-form.component';

describe('DescFormComponent', () => {
  let component: DescFormComponent;
  let fixture: ComponentFixture<DescFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
