import { Component, OnInit, DoCheck } from '@angular/core';
import { NgFor } from '@angular/common';
import { MoodService, Mood } from '../form/mood.service';

@Component({
  selector: 'app-modd-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modd-card.component.html',
  styleUrl: './modd-card.component.css'
})
export class ModdCardComponent implements OnInit, DoCheck {
  mood: Mood = '';
  pet: string = '';
  descs: string[] = [];

  constructor(private moodService: MoodService) {}

  ngOnInit(): void {
    this.refresh();
  }

  ngDoCheck(): void {
    this.refresh();
  }

  private refresh(): void {
    this.mood = this.moodService.getMood();
    this.pet = this.moodService.getPet();
    const stored = localStorage.getItem('descs');
    if (stored) {
      try {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          this.descs = arr;
        }
      } catch {
        this.descs = [];
      }
    } else {
      this.descs = [];
    }
  }
}
