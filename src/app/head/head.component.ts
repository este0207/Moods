import { Component } from '@angular/core';
import { MoodTitleComponent } from "../mood-title/mood-title.component";

@Component({
  selector: 'app-head',
  imports: [MoodTitleComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
