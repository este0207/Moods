# Mood – Angular Mood Tracking App

Mood is a modern, responsive Angular application for tracking and visualizing your daily moods. It features dynamic UI components, localStorage-based persistence, and a modular, scalable architecture following Angular and TypeScript best practices.

---

## Features

- **Mood Selection**: Choose your current mood (Happy, Sad, Angry, Bored) via an interactive form.
- **Mood Description**: Add up to four custom descriptions for your mood.
- **Mood Card**: Visual summary of your mood and descriptions, with mood-specific icons.
- **Map Integration**: View your current location on a map (using Leaflet and LocationIQ API).
- **Persistence**: All mood data and descriptions are stored in `localStorage` and auto-cleared daily at midnight.
- **Responsive UI**: Mobile-first, adaptive design with CSS variables and best practices.
- **Modular Angular Architecture**: Standalone components, strict typing, and Angular dependency injection.
- **Unit Tests**: Each component includes unit tests for reliability.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

```bash
npm install
```

### Development Server

Start the local server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The app reloads automatically on code changes.

---

## Project Structure

```
public/                      # Static assets (mood icons, favicon, etc.)
  angry.png
  bored.png
  favicon.ico
  happy.png
  marker-icon-2x.png
  marker-icon.png
  marker-shadow.png
  sad.png
src/
  index.html
  main.ts
  styles.css                 # Global styles
  app/
    app.component.*          # Root component
    app.config.ts            # Angular app configuration
    app.routes.ts            # App routing configuration
    mood-state.service.ts    # Mood state management service
    form/                    # Mood selection form component
      form.component.*
    desc-form/               # Mood description form component
      desc-form.component.*
    mood-card/               # Mood summary card component
      mood-card.component.*
    mood-title/              # Mood title display component
      mood-title.component.*
    nav-bar/                 # Navigation bar component
      nav-bar.component.*
    head/                    # Header section component
      head.component.*
    map/                     # Map integration component
      map.component.*
    iframe-modal/            # Iframe modal component
      iframe-modal.component.*
angular.json
package.json
tsconfig.json
tsconfig.app.json
tsconfig.spec.json
README.md
```

---

## Usage

1. **Select Your Mood**: On launch, choose your mood and optionally add descriptions.
2. **View Mood Card**: See your mood and details reflected in the summary card.
3. **Map**: Open the map to view your current location (requires browser geolocation permission).
4. **Persistence**: Your mood and details are saved for the day and reset at midnight.

---

## Scripts

- `ng serve` – Start development server
- `ng build` – Build for production
- `ng test` – Run unit tests

---

## Testing

Run all unit tests with:

```bash
ng test
```

---

## Contributing

- Follow Angular and TypeScript best practices.
- Use standalone components and services for business logic.
- Write unit tests for all new features.
- Use Angular CLI for code generation.
- See `.editorconfig` for formatting rules.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [Angular](https://angular.io/)
- [Leaflet](https://leafletjs.com/)
- [LocationIQ](https://locationiq.com/)
- [Font Awesome](https://fontawesome.com/)

---

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Style Guide](https://angular.io/guide/styleguide)

---

*Generated on May 14, 2025*
