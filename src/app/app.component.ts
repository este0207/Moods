import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { MoodStateService, MoodState } from './mood-state.service';
import { MoodTitleComponent } from "./mood-title/mood-title.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MoodCardComponent } from "./mood-card/mood-card.component";
import { HeadComponent } from "./head/head.component";
import { FormComponent } from "./form/form.component";
import { DescFormComponent } from "./desc-form/desc-form.component";
import { MapComponent } from "./map/map.component";
import { IframeModalComponent } from './iframe-modal/iframe-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavBarComponent, MoodCardComponent, HeadComponent, FormComponent, DescFormComponent, MapComponent, IframeModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showIframeModal = false;
  iframeUrl = 'https://moods-ai.vercel.app/';
  moodState: MoodState | null = null;

  constructor(
    private moodStateService: MoodStateService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.moodStateService.getState().subscribe(state => {
      this.moodState = state;
      if (state.background) {
        this.changeBackgroundColor(state.background);
      }
    });
    this.scheduleLocalStorageClear();
  }

  openIframeModal() {
    this.showIframeModal = true;
  }

  closeIframeModal() {
    this.showIframeModal = false;
  }

  changeBackgroundColor(color: string) {
    this.renderer.setStyle(document.documentElement, '--main-bg-color', color);
  }

  /**
   * Schedule localStorage clearing at midnight and every 24h after.
   */
  scheduleLocalStorageClear() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();
    setTimeout(() => {
      localStorage.clear();
      this.moodStateService.resetState();
      setInterval(() => {
        localStorage.clear();
        this.moodStateService.resetState();
      }, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
  }
}
