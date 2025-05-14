import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodStateService, MoodState } from '../mood-state.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  mood: MoodState['mood'] = '';
  moods: MoodState['mood'][] = ['HAPPY', 'SAD', 'ANGRY', 'BORED'];
  formVisible = true;

  constructor(private moodState: MoodStateService) {
    this.moodState.getState().subscribe(state => {
      this.formVisible = state.formVisible;
      this.mood = state.mood;
    });
  }

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
    this.moodState.setState({
      mood: this.mood,
      background,
      pet,
      formVisible: false
    });
  }
}
