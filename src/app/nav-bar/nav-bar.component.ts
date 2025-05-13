import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  ShowMap() {
    const mapcontainer = document.getElementById("mapcontainer");
    if (mapcontainer) {
      mapcontainer.style.left = "0";
    }
  }

}
