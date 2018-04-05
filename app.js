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

//make a request for the geocode of that address to google geocode api
geocode.geocodeAddress(argv.address , (error, results) => {
    if (error){
        console.log(error)
    }
    else{
        geolocation.latitude = String(results.latitude)
        geolocation.longitude = String(results.longitude)
        console.log(results.address)

        //making an http request to darksky api for user's weather JSON data
        weather.weatherRequest(geolocation.latitude, geolocation.longitude, (error, weatherResult) => {
            if (error)
                console.log(error)
            else{
                console.log(JSON.stringify(weatherResult.currently, undefined, 2))
            }
        })
    }
})


