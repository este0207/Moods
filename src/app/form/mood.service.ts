import { Injectable } from '@angular/core';

export type Mood = 'HAPPY' | 'SAD' | 'ANGRY' | 'BORED' | '';

@Injectable({ providedIn: 'root' })
export class MoodService {
  private mood: Mood = '';
  private background: string = '';
  private pet: string = '';

  setMood(mood: Mood, background: string, pet: string): void {
    this.mood = mood;
    this.background = background;
    this.pet = pet;
    localStorage.setItem('mood', mood);
    localStorage.setItem('background', background);
    localStorage.setItem('pet', pet);
  }

  getMood(): Mood {
    return (localStorage.getItem('mood') as Mood) || '';
  }

  getBackground(): string {
    return localStorage.getItem('background') || '';
  }

  getPet(): string {
    return localStorage.getItem('pet') || '';
  }

  clear(): void {
    localStorage.removeItem('mood');
    localStorage.removeItem('background');
    localStorage.removeItem('pet');
  }
}
