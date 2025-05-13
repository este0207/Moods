import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `
    <div id="mapcontainer">
      <button class="close-btn" (click)="closeMap()"><i class="fa-solid fa-xmark"></i></button>
      <div id="map"></div>
    </div>
  `,
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private readonly APIKEY = "pk.9abbc12e0a7e8b33f1c96f7fd87fd1af";

  constructor() {}

  ngOnInit() {
    this.initializeMap();
    this.getLocation();
  }

  closeMap() {
    const mapcontainer = document.getElementById("mapcontainer");
    if (mapcontainer) {
      mapcontainer.style.left = "100%";
    }
  }

  private initializeMap(): void {
    this.map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.success(position),
        () => this.error()
      );
    }
  }

  private success(position: GeolocationPosition): void {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    fetch(`https://us1.locationiq.com/v1/reverse?key=${this.APIKEY}&lat=${lat}&lon=${lon}&format=json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(log => { 
        const city = log.address.city;
        this.updateMap(lat, lon, city);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  private updateMap(lat: number, lon: number, city: string): void {
    this.map.setView([lat, lon], 13);
    L.marker([lat, lon])
      .addTo(this.map)
      .bindPopup('Your location')
      .openPopup();
  }

  private error(): void {
    console.error("Unable to retrieve your location.");
  }
}
