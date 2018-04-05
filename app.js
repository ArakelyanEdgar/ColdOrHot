const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

//geolocation datastructre with darksky, the weather forecast, api key
geolocation = { 
    latitude: '',
    longitude: ''
}

//making async call to google geocode api with user inputted address, on success make async call to weather.io dark sky api
geocode.geocodeAddress(argv.address).then((results) => {
    geolocation.latitude = String(results.latitude)
    geolocation.longitude = String(results.longitude)
    console.log(results.address)

    //retrieving weather data
    weather.weatherRequest(geolocation.latitude, geolocation.longitude).then(
        (weatherResult) => {
                console.log(JSON.stringify(weatherResult.currently, undefined, 2))
                console.log(`It is currently ${weatherResult.currently.temperature}, but it feels like ${weatherResult.currently.apparentTemperature}`)
    }, (errMessage) => {
        console.log(errMessage)
    })
}, (errorMessage) => {
    console.log(errorMessage)
})


