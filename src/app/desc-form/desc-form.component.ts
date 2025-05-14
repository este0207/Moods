import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodStateService } from '../mood-state.service';

@Component({
  selector: 'app-desc-form',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './desc-form.component.html',
  styleUrl: './desc-form.component.css'
})
export class DescFormComponent {
  descs: string[] = [''];
  descFormVisible = true;

  constructor(private moodState: MoodStateService) {
    this.moodState.getState().subscribe(state => {
      this.descFormVisible = state.descFormVisible;
      this.descs = [...state.descs];
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onDescInput(i: number): void {
    if (i === this.descs.length - 1 && this.descs[i].trim() !== '') {
      this.descs.push('');
    }
  }

  submitMoodDesc() {
    const filtered = this.descs.filter(d => d.trim() !== '');
    this.moodState.setState({
      descs: filtered,
      descFormVisible: false
    });
  }
}
