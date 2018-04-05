const yargs = require('yargs')
const request = require('request')
const geocode = require('./geocode/geocode')

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
let key = '5cc20ef634c8d2497e706301c44c0f5c'
geolocation = {
    key, 
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
        console.log(JSON.stringify(results, undefined, 2))

        request({
            url: `https://api.darksky.net/forecast/${geolocation.key}/${geolocation.latitude},${geolocation.longitude}`,
            json: true
        }, (error, response, body) => {
            if (error)
                console.error('Difficulty connecting to DarkSky servers')
            else if (body.code === 400)
                console.error('The given location is invalid')
            else{
                console.log(body.currently.temperature)
            }
        })
    }
})

//retrieving weather for given address
// request({
//     url: `https://api.darksky.net/forecast/${geolocation.key}/${geolocation.latitude},${geolocation.longitude}`,
//     json: true
// }, (error, response, body) => {
//     console.log(body)
// })


