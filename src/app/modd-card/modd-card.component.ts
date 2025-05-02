import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modd-card',
  imports: [],
  templateUrl: './modd-card.component.html',
  styleUrl: './modd-card.component.css'
})
export class ModdCardComponent {

  mood_icon = input("/happy.png");

}
