import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Mood = '' | 'HAPPY' | 'SAD' | 'ANGRY' | 'BORED';

export interface MoodState {
  mood: Mood;
  background: string;
  pet: string;
  descs: string[];
  formVisible: boolean;
  descFormVisible: boolean;
}

/**
 * Service for managing the mood state and synchronizing with localStorage.
 * Provides granular state management and utility methods for mood tracking.
 */
@Injectable({ providedIn: 'root' })
export class MoodStateService {
  private readonly initialState: MoodState = {
    mood: '',
    background: '',
    pet: '',
    descs: [''],
    formVisible: true,
    descFormVisible: true,
  };

  private state$ = new BehaviorSubject<MoodState>(this.loadState());

  /**
   * Observable for the current mood state.
   */
  getState() {
    return this.state$.asObservable();
  }

  /**
   * Get the current value of the mood state (snapshot).
   */
  getCurrentState(): MoodState {
    return this.state$.value;
  }

  /**
   * Set the entire state or a partial update.
   * @param partial Partial state to merge with the current state.
   */
  setState(partial: Partial<MoodState>) {
    const newState = { ...this.state$.value, ...partial };
    this.state$.next(newState);
    this.saveState(newState);
  }

  /**
   * Reset the state to its initial values.
   */
  resetState() {
    this.state$.next(this.initialState);
    this.saveState(this.initialState);
  }

  /**
   * Set the mood value.
   * @param mood Mood value to set.
   */
  setMood(mood: Mood) {
    this.setState({ mood });
  }

  /**
   * Set the background value.
   * @param background Background value to set.
   */
  setBackground(background: string) {
    this.setState({ background });
  }

  /**
   * Set the pet value.
   * @param pet Pet value to set.
   */
  setPet(pet: string) {
    this.setState({ pet });
  }

  /**
   * Set the form visibility.
   * @param visible Whether the form should be visible.
   */
  setFormVisible(visible: boolean) {
    this.setState({ formVisible: visible });
  }

  /**
   * Set the description form visibility.
   * @param visible Whether the description form should be visible.
   */
  setDescFormVisible(visible: boolean) {
    this.setState({ descFormVisible: visible });
  }

  /**
   * Set the descriptions array.
   * @param descs Array of descriptions.
   */
  setDescs(descs: string[]) {
    this.setState({ descs });
  }

  /**
   * Add a new description to the array.
   * @param desc Description to add.
   */
  addDesc(desc: string) {
    const descs = [...this.state$.value.descs, desc];
    this.setDescs(descs);
  }

  /**
   * Update a description at a specific index.
   * @param index Index to update.
   * @param desc New description value.
   */
  updateDesc(index: number, desc: string) {
    const descs = [...this.state$.value.descs];
    if (index >= 0 && index < descs.length) {
      descs[index] = desc;
      this.setDescs(descs);
    }
  }

  /**
   * Remove a description at a specific index.
   * @param index Index to remove.
   */
  removeDesc(index: number) {
    const descs = this.state$.value.descs.filter((_, i) => i !== index);
    this.setDescs(descs.length > 0 ? descs : ['']);
  }

  private saveState(state: MoodState) {
    localStorage.setItem('mood', state.mood);
    localStorage.setItem('background', state.background);
    localStorage.setItem('pet', state.pet);
    localStorage.setItem('descs', JSON.stringify(state.descs));
  }

  private loadState(): MoodState {
    const mood = (localStorage.getItem('mood') as Mood) || '';
    const background = localStorage.getItem('background') || '';
    const pet = localStorage.getItem('pet') || '';
    let descs: string[] = [''];
    try {
      const stored = localStorage.getItem('descs');
      if (stored) {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          descs = arr.length > 0 ? arr : [''];
        }
      }
    } catch {}
    return {
      mood,
      background,
      pet,
      descs,
      formVisible: !mood,
      descFormVisible: !descs.length || descs.every(d => !d),
    };
  }
}
