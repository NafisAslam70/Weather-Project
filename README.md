# Weather Project

A small Node.js and Express app that looks up current weather for a city using the OpenWeatherMap API. Enter a city and the server returns the current temperature, a short weather description, and the provider's weather icon.

## Tech
Node.js, Express, HTML forms, and OpenWeatherMap.

## Run locally
```bash
npm install
node app.js
```

Then open http://localhost:3001.

## API configuration
The app calls OpenWeatherMap from the server. Configure your own API key in an environment variable before deployment; do not commit private API keys.
