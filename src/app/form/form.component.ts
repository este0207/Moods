import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
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

  changeBackgroundColor(color: string) {
    document.documentElement.style.setProperty('--main-bg-color', color);
  }

  changeNavBarColor(color: string) {
    const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons.forEach(button => {
      button.style.backgroundColor = color;
    });
  }

  isHappyChecked() {
    const mood = "HAPPY" ;
    const happyCheckbox = document.querySelector('#happyCB') as HTMLInputElement;
    if (happyCheckbox && happyCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (mainImg) {
        mainImg.src = "/happy.png";
        moodTitle.innerText = "HAPPY"
        this.changeBackgroundColor('linear-gradient(#56FA77, #339448)');
        localStorage.setItem('mood', mood);
        localStorage.setItem('background', 'linear-gradient(#56FA77, #339448)')
        localStorage.setItem('pet', '/happy.png');
        console.log(`Stored mood is: ${mood}`);
      }
      this.changeNavBarColor("#339448");
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isSadChecked() {
    const mood = "SAD" ;
    const sadCheckbox = document.querySelector('#sadCB') as HTMLInputElement;
    if (sadCheckbox && sadCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (mainImg) {
        mainImg.src = "/sad.png";
        moodTitle.innerText = "SAD"
        localStorage.setItem('mood', mood);
        localStorage.setItem('pet', '/sad.png');
        console.log(`Stored mood is: ${mood}`)
      }
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isAngryChecked() {
    const mood = "ANGRY" ;
    const angryCheckbox = document.querySelector('#angryCB') as HTMLInputElement;
    if (angryCheckbox && angryCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;

      if (mainImg) {
        mainImg.src = "/angry.png";
        moodTitle.innerText = "ANGRY"
        this.changeBackgroundColor('linear-gradient(#FF6D6F, #943334)');
        localStorage.setItem('mood', mood);
        localStorage.setItem('background', 'linear-gradient(#FF6D6F, #943334)')
        localStorage.setItem('pet', '/angry.png');
        console.log(`Stored mood is: ${mood}`)
      }
      this.changeNavBarColor("#710002");
    } else {
      console.log("Checkbox is not checked");
    }
  }

  isBoredChecked() {
    const mood = "BORED" ;
    const boredCheckbox = document.querySelector('#boredCB') as HTMLInputElement;
    if (boredCheckbox && boredCheckbox.checked) {
      const mainImg = document.querySelector("#mainImg") as HTMLImageElement;
      const moodTitle = document.querySelector("#moodTitle") as HTMLElement;
      if (mainImg) {
        mainImg.src = "/bored.png";
        moodTitle.innerText = "BORED"
        this.changeBackgroundColor('linear-gradient(#9B9B9B, #616161)');
        localStorage.setItem('mood', mood);
        localStorage.setItem('background', 'linear-gradient(#9B9B9B, #616161)')
        localStorage.setItem('pet', '/bored.png');
        console.log(`Stored mood is: ${mood}`)
      }
      this.changeNavBarColor("#323232");
    } else {
      console.log("Checkbox is not checked");
    }
  }
}
