import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodService, Mood } from './mood.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  mood: Mood = '';
  moods: Mood[] = ['HAPPY', 'SAD', 'ANGRY', 'BORED'];
  formVisible = true;

  constructor(private moodService: MoodService) {}

  submitMood() {
    if (!this.mood) return;
    let background = '';
    let pet = '';
    switch (this.mood) {
      case 'HAPPY':
        background = 'linear-gradient(#56FA77, #339448)';
        pet = '/happy.png';
        break;
      case 'SAD':
        background = 'linear-gradient(#56A9FA, #334894)';
        pet = '/sad.png';
        break;
      case 'ANGRY':
        background = 'linear-gradient(#FF6D6F, #943334)';
        pet = '/angry.png';
        break;
      case 'BORED':
        background = 'linear-gradient(#9B9B9B, #616161)';
        pet = '/bored.png';
        break;
    }
    this.moodService.setMood(this.mood, background, pet);
    this.formVisible = false;
    // Optionally emit event or close form here
  }
}
