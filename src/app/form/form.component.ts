import { Component } from '@angular/core';
import { ModdCardComponent } from '../modd-card/modd-card.component';
import { MoodTitleComponent } from '../mood-title/mood-title.component';

@Component({
  selector: 'app-form',
  imports: [ModdCardComponent, MoodTitleComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  submitMood() {
    const formElement = document.querySelector('.form') as HTMLElement;
    if (formElement) {
      formElement.style.left = "100%";
      setTimeout(() => {
        formElement.style.display = "none";
      }, 500);
    }
  }

  isHappyChecked() {
    const happyCheckbox = document.querySelector('#happyCB') as HTMLInputElement;
    if (happyCheckbox && happyCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (mainImg) {
        mainImg.src = "/happy.png";
        moodTitle.innerText = "HAPPY"
      }
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isSadChecked() {
    const sadCheckbox = document.querySelector('#sadCB') as HTMLInputElement;
    if (sadCheckbox && sadCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;

      if (mainImg) {
        mainImg.src = "/sad.png";
        moodTitle.innerText = "SAD"
      }
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isAngryChecked() {
    const angryCheckbox = document.querySelector('#angryCB') as HTMLInputElement;
    if (angryCheckbox && angryCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;

      if (mainImg) {
        mainImg.src = "/angry.png";
        moodTitle.innerText = "ANGRY"
      }
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isBoredChecked() {
    const boredCheckbox = document.querySelector('#boredCB') as HTMLInputElement;
    if (boredCheckbox && boredCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (mainImg) {
        mainImg.src = "/bored.png";
        moodTitle.innerText = "BORED"
      }
    } else {
      console.log("Checkbox is not checked");
    }
  }

}
