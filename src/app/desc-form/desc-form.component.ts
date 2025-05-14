import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodService, Mood } from '../form/mood.service';

@Component({
  selector: 'app-desc-form',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './desc-form.component.html',
  styleUrl: './desc-form.component.css'
})
export class DescFormComponent {
  descs: string[] = ['', '', '', ''];

  constructor() {}

  submitMoodDesc() {
    this.descs.forEach((desc, i) => {
      localStorage.setItem(`desc${i + 1}`, desc);
    });
    // Optionally emit event or close form here
  }
}
