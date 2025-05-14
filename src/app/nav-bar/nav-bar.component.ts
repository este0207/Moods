import { Component, Output, EventEmitter } from '@angular/core';
import { MoodStateService } from '../mood-state.service';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IframeModalComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showIframeModal = false;

  @Output() openModal = new EventEmitter<void>();
  constructor(private moodState: MoodStateService) {}

  ShowMap() {
    const mapcontainer = document.getElementById("mapcontainer");
    if (mapcontainer) {
      mapcontainer.style.left = "0";
    }
  }

  onOpenIframeModal() {
    this.openModal.emit();
  }

  closeIframeModal() {
    this.showIframeModal = false;
  }

  onHomeClick() {
    this.moodState.resetState();
  }
}
