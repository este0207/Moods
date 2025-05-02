import { Component } from '@angular/core';
import { ModdCardComponent } from '../modd-card/modd-card.component';

@Component({
  selector: 'app-desc-form',
  imports: [ModdCardComponent],
  templateUrl: './desc-form.component.html',
  styleUrl: './desc-form.component.css'
})
export class DescFormComponent {

  submitMoodDesc() {
    const formElement = document.querySelector('.descform') as HTMLElement;
    if (formElement) {
      formElement.style.left = "100%";
      setTimeout(() => {
        formElement.style.display = "none";
      }, 500);
    }
  }

  updateMoodDescription1() {
    const input1 = document.querySelector("#input1");
    const li1 = document.querySelector("#li1");
    const text = (input1 as HTMLInputElement).value;
    
    if (li1) {
      li1.textContent = text;
    }
  }

  updateMoodDescription2() {
    const input2 = document.querySelector("#input2");
    const li2 = document.querySelector("#li2");
    const text = (input2 as HTMLInputElement).value;
    
    if (li2) {
      li2.textContent = text;
    }
  }

  updateMoodDescription3() {
    const input3 = document.querySelector("#input3");
    const li3 = document.querySelector("#li3");
    const text = (input3 as HTMLInputElement).value;
    
    if (li3) {
      li3.textContent = text;
    }
  }

  updateMoodDescription4() {
    const input4 = document.querySelector("#input4");
    const li4 = document.querySelector("#li4");
    const text = (input4 as HTMLInputElement).value;
    
    if (li4) {
      li4.textContent = text;
    }
  }
}
