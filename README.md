# Weather-App
Finds the weather in the inputted area by requesting your latitude and longitude from Google Geocode API and then makes a request to DarkSky's API for the weather at the location.


Simply git clone this repository and run: node app.js --a 'address'

Example:

node app.js --address '10673 blue nile ct'

returns:

10673 Blue Nile Ct, Las Vegas, NV 89144, USA
{
  "time": 1522992619,
  "summary": "Partly Cloudy",
  "icon": "partly-cloudy-night",
  "nearestStormDistance": 0,
  "precipIntensity": 0.002,
  "precipIntensityError": 0,
  "precipProbability": 0.71,
  "precipType": "rain",
  "temperature": 71.34,
  "apparentTemperature": 71.34,
  "dewPoint": 27.51,
  "humidity": 0.19,
  "pressure": 1008.7,
  "windSpeed": 7.61,
  "windGust": 9.36,
  "windBearing": 267,
  "cloudCover": 0.49,
  "uvIndex": 0,
  "visibility": 10,
  "ozone": 299.28
}
It is currently 71.34, but it feels like 71.34
