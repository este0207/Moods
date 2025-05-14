import { Component } from '@angular/core';
import { MoodTitleComponent } from "./mood-title/mood-title.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ModdCardComponent } from "./modd-card/modd-card.component";
import { HeadComponent } from "./head/head.component";
import { FormComponent } from "./form/form.component";
import { DescFormComponent } from "./desc-form/desc-form.component";
import { MapComponent } from "./map/map.component";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, ModdCardComponent, HeadComponent, FormComponent, DescFormComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  changeBackgroundColor(color: string) {
    document.documentElement.style.setProperty('--main-bg-color', color);
  }

  ngOnInit() {
    console.log("The page has loaded");
    const storedData = localStorage.getItem('mood');
    const storedBg = localStorage.getItem('background');
    const storedImg = localStorage.getItem('pet');
    const storedDescData1 = localStorage.getItem('desc1');
    const storedDescData2 = localStorage.getItem('desc2');
    const storedDescData3 = localStorage.getItem('desc3');
    const storedDescData4 = localStorage.getItem('desc4');

    
    
    if (storedData) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const form = document.querySelector(".form") as HTMLDivElement;
      const descform = document.querySelector(".descform") as HTMLDivElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (storedDescData1) {
        const li1 = document.querySelector("#li1");
        if (li1) {
          li1.textContent = storedDescData1;
        }
      }
      if (storedDescData2) {
        const li2 = document.querySelector("#li2");
        if (li2) {
          li2.textContent = storedDescData2;
        }
      }
      if (storedDescData3) {
        const li3 = document.querySelector("#li3");
        if (li3) {
          li3.textContent = storedDescData3;
        }
      }
      if (storedDescData4) {
        const li4 = document.querySelector("#li4");
        if (li4) {
          li4.textContent = storedDescData4;
        }
      }
      if (form) {
        form.style.display = "none";
        descform.style.display = "none";
        if (storedImg) {
            mainImg.setAttribute('src', storedImg);
        } else {
          console.warn('No image found in LocalStorage for the key "pet"');
        }
        if (storedBg) {
          this.changeBackgroundColor(storedBg);
        } else {
          console.warn('No background color found in LocalStorage for the key "background".');
        }
      }
      moodTitle.innerText = storedData;
      console.log('LocalStorage Data:', storedData);
      console.log('LocalStorage Data:', storedBg);
    } else {
      console.log('No data found in LocalStorage for the key "mood".');
    }
  }

  DeleteLO() {
    // Calculer le temps jusqu'à minuit prochain
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    // Première exécution à minuit
    setTimeout(() => {
      localStorage.clear();
      
      // Ensuite, exécuter tous les jours à minuit
      setInterval(() => {
        localStorage.clear();
      }, 24 * 60 * 60 * 1000); // 24 heures en millisecondes
    }, timeUntilMidnight);
  }
}
