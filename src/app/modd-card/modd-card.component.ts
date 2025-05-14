import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MoodStateService, MoodState } from '../mood-state.service';

@Component({
  selector: 'app-modd-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modd-card.component.html',
  styleUrl: './modd-card.component.css',
})
export class ModdCardComponent implements OnInit {
  mood: MoodState['mood'] = '';
  pet: string = '';
  descs: string[] = [];

  constructor(private moodState: MoodStateService) {}

  ngOnInit(): void {
    this.moodState.getState().subscribe(state => {
      this.mood = state.mood;
      this.pet = state.pet;
      this.descs = state.descs.filter(d => d.trim() !== '');
    });
  }
}
