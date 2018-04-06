# Weather-App
Finds the current weather in the inputted area by requesting your latitude and longitude from Google Geocode API and then makes a request to DarkSky's API for the weather at the location.


Simply git clone this repository, npm install, and run: node app.js --a 'address'

Example:

node app.js --address 'new york'

will return:

New York, NY, USA
{
  "time": 1522993914,
  "summary": "Partly Cloudy",
  "icon": "partly-cloudy-night",
  "nearestStormDistance": 86,
  "nearestStormBearing": 260,
  "precipIntensity": 0,
  "precipProbability": 0,
  "temperature": 35.01,
  "apparentTemperature": 35.01,
  "dewPoint": 18.37,
  "humidity": 0.5,
  "pressure": 1020.29,
  "windSpeed": 2.89,
  "windGust": 3.58,
  "windBearing": 282,
  "cloudCover": 0.35,
  "uvIndex": 0,
  "visibility": 9.08,
  "ozone": 398.54
}
It is currently 35.01, but it feels like 35.01
