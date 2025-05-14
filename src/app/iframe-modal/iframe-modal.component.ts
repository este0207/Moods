import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-modal',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal-content">
      <button class="close-btn" (click)="close()">&times;</button>
      <iframe [src]="safeIframeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  `,
  styleUrls: ['./iframe-modal.component.css']
})
export class IframeModalComponent {
  @Input() iframeUrl: string = '';
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  safeIframeUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  }

  close() {
    this.closed.emit();
  }
}
