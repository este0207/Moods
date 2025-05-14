import { Component } from '@angular/core';
import { MoodStateService, MoodState } from '../mood-state.service';

@Component({
  selector: 'app-mood-title',
  standalone: true,
  templateUrl: './mood-title.component.html',
  styleUrl: './mood-title.component.css'
})
export class MoodTitleComponent {
  mood: MoodState['mood'] = '';

  constructor(private moodState: MoodStateService) {
    this.moodState.getState().subscribe(state => {
      this.mood = state.mood;
    });
  }
}
