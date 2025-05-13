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

  constructor() {
    // Fix Leaflet's default icon path issues
    const iconRetinaUrl = './marker-icon-2x.png';
    const iconUrl = './marker-icon.png';
    const shadowUrl = './marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

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
    console.log('Initializing map...');
    this.map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private getLocation(): void {
    console.log('Getting location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.success(position),
        (error) => this.error(error)
      );
    }
  }

  private success(position: GeolocationPosition): void {
    console.log('Location received:', position);
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
        console.log('Location data:', log);
        const city = log.address.city;
        this.updateMap(lat, lon, city);
      })
      .catch(error => {
        console.error('Error:', error);
        // En cas d'erreur, on affiche quand même la carte avec le marqueur
        this.updateMap(lat, lon, 'Your location');
      });
  }

  private updateMap(lat: number, lon: number, city: string): void {
    console.log('Updating map with coordinates:', lat, lon, city);
    this.map.setView([lat, lon], 13);
    
    // Créer un marqueur personnalisé
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background-color: #2196F3; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    // Ajouter le marqueur avec l'icône personnalisée
    L.marker([lat, lon], { icon: customIcon })
      .addTo(this.map)
      .bindPopup(city)
      .openPopup();
  }

  private error(error: any): void {
    console.error("Error getting location:", error);
  }
}
