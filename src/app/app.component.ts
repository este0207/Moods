import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoodTitleComponent } from "./mood-title/mood-title.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ModdCardComponent } from "./modd-card/modd-card.component";
import { HeadComponent } from "./head/head.component";
import { FormComponent } from "./form/form.component";
import { DescFormComponent } from "./desc-form/desc-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoodTitleComponent, NavBarComponent, ModdCardComponent, HeadComponent, FormComponent, DescFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mood';
}
