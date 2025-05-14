import { Component } from '@angular/core';
import { MoodService, Mood } from '../form/mood.service';

@Component({
  selector: 'app-mood-title',
  standalone: true,
  templateUrl: './mood-title.component.html',
  styleUrl: './mood-title.component.css'
})
export class MoodTitleComponent {
  mood: Mood = '';

  constructor(private moodService: MoodService) {
    this.mood = this.moodService.getMood();
  }
}
