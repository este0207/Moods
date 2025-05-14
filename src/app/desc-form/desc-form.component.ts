import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodService, Mood } from '../form/mood.service';

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

  constructor() {
    // Load descs from localStorage as a JSON array if present
    const stored = localStorage.getItem('descs');
    if (stored) {
      try {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          this.descs = arr.length > 0 ? arr : [''];
        }
      } catch {}
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onDescInput(i: number): void {
    // If the last input is not empty, add a new one
    if (i === this.descs.length - 1 && this.descs[i].trim() !== '') {
      this.descs.push('');
    }
  }

  submitMoodDesc() {
    // Save only non-empty descriptions as a JSON array
    const filtered = this.descs.filter(d => d.trim() !== '');
    localStorage.setItem('descs', JSON.stringify(filtered));
    this.descFormVisible = false;
  }
}
