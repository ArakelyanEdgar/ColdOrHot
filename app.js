const request = require('request')
const yargs = require('yargs')

//yargs to retrieve address from user
const argv = yargs.command('locate', 'Find your geocode', {
    addr: {
        alias: 'a',
        demand: true,
        describe: '<address>'
    }
}).help().argv

//urlencode the address
urlAddress = encodeURI(argv.addr)

//make a request for the geocode of that address to google geocode api
//note that adding json:true property parses the JSON to an object for me and ensures that the body is defined
request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+urlAddress,
    json: true
}, (error, response, body) => {
    let geocode = body.results[0]
    let coordinates = geocode.geometry.location

    console.log(`Address: ${geocode.formatted_address}`)
    console.log(`Latitude: ${coordinates.lat}`)
    console.log(`Longitude: ${coordinates.lng}`)
})