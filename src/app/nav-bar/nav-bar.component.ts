import { Component } from '@angular/core';
import { MoodStateService } from '../mood-state.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private moodState: MoodStateService) {}

  ShowMap() {
    const mapcontainer = document.getElementById("mapcontainer");
    if (mapcontainer) {
      mapcontainer.style.left = "0";
    }
  }

  onHomeClick() {
    this.moodState.resetState();
  }
}
