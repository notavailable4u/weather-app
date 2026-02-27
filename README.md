# Weather App (React + Open-Meteo API)

[![Last Commit](https://img.shields.io/github/last-commit/notavailable4u/weather-app)](https://github.com/notavailable4u/weather-app/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/notavailable4u/weather-app)](https://github.com/notavailable4u/weather-app)
[![Tech](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-purple)](https://vite.dev)

Production-style weather application built with React 19 and Vite. Users can search any location and view current conditions, hourly trends, and 7-day forecasts with unit switching and responsive layouts.

<div align="center">
  <img width="600" alt="Weather App Search and Results" src="src/assets/screenshots/search-result.gif" />
</div>

Live challenge brief: [Frontend Mentor - Weather App](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49)

## Why This Project

I built this project to strengthen practical frontend skills in:

- API-driven UI architecture
- State modeling for multi-view weather data (current, hourly, daily)
- Responsive, accessible component design
- Refactoring for readability and maintainability

### Source

This project was developed from one of the [Frontend Mentor Challenge Projects](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).

[Frontend Mentor](https://www.frontendmentor.io) has been an invaluable resource for me; especially for their professional format Challenge Projects in which you are given the finished product requirements, a Figma design file, and the decision making process is up to you.

## Key Features

- Location-based weather search
- Current weather conditions:
  - Temperature
  - Weather icon
  - Location metadata
- Additional metrics:
  - Feels like
  - Humidity
  - Wind speed
  - Precipitation
- 7-day forecast with daily high/low values
- Hourly forecast with selectable day view
- Unit switching:
  - Celsius / Fahrenheit
  - km/h / mph
  - millimeters
- Responsive layouts across desktop, tablet, and mobile
- Hover and focus states for interactive controls

## Tech Stack

- [React v19.1.1](https://react.dev)
- [Vite v7.1.7](https://vite.dev)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
- [Open-Meteo API](https://open-meteo.com/)

### Requirements
Node.js 20.19+ or 22.12+ (required for Vite 7)

## Getting Started

```bash
git clone https://github.com/notavailable4u/weather-app
cd weather-app
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

- `npm run dev` - start development server
- `npm run build` - build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Architecture Overview

The application uses a two-step data flow:
1. Geocoding API → converts location name to coordinates
2. Forecast API → retrieves weather data using latitude/longitude

State is organized by forecast scope (current, hourly, daily) to support multi-view rendering and unit switching.

## Engineering Notes

- Implemented a two-step location flow (geocoding -> forecast query) for city-name search.
- Refactored component logic to improve separation of concerns and readability.
- Reworked conditional icon mapping for cleaner rendering logic.
- Prioritized reusable component patterns for forecast and metric display.

## Validation

- Manual validation completed for core flows (search, units toggle, day selection, responsive behavior).
- Automated tests are planned as the next project stage.

## Planned Improvements

- Add automated tests (Vitest/Jest + React Testing Library)
- Migrate to TypeScript
- Expand error/empty states and UX polish

## AI Usage Disclosure

AI tools (GitHub Copilot, Codex, ChatGPT) were used for code review, refactoring guidance, and implementation support. Final architectural and code decisions were made by me.

Detailed examples of how AI was used in specific components are documented here:  
👉 [AI Usage Notes](/docs/AI-USAGE.md)

## Screenshots

**Home - Desktop**

![Screenshot of Home Page - Desktop View](src/assets/screenshots/home-Macbook-Air-3125x984.png)

**Home - Tablet**

![Screenshot of Home Page - Tablet View](src/assets/screenshots/home-iPad-Air-5-1562x1184.png)

**Home - Mobile (iPhone 14 Pro mockup)**

![Screenshot of Home Page - iPhone 14 Pro Mockup](src/assets/screenshots/home-iphone-14.png)

**Results - Desktop**

![Screenshot of Results Page - Desktop View](src/assets/screenshots/result-Macbook-Air.png)

**Results - Tablet**

![Screenshot of Results Page - Tablet View](src/assets/screenshots/result-iPad-Air-5-1562x1820.png)

**Search + Results Flow (GIF)**

![GIF of Search and Result - Desktop View](src/assets/screenshots/search-result.gif)

**Hourly Day Selection (GIF)**

![GIF of Hourly Forecast Day Selection - Desktop View](src/assets/screenshots/hourly-forecast-select-day.gif)
