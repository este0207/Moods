import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IframeModalComponent } from './iframe-modal.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('IframeModalComponent', () => {
  let component: IframeModalComponent;
  let fixture: ComponentFixture<IframeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeModalComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(IframeModalComponent);
    component = fixture.componentInstance;
    component.iframeUrl = 'https://moods-ai.vercel.app/';
    component.visible = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render iframe with correct src', () => {
    const iframe: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
    expect(iframe).toBeTruthy();
    expect(iframe.src).toContain('https://moods-ai.vercel.app/');
  });

  it('should emit closed event when close button is clicked', () => {
    spyOn(component.closed, 'emit');
    const closeBtn: DebugElement = fixture.debugElement.query(By.css('.close-btn'));
    closeBtn.nativeElement.click();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
