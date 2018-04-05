const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).help()
    .alias('help', 'h')
    .argv

//urlencode the address
urlAddress = encodeURI(argv.a)

//make a request for the geocode of that address to google geocode api
//note that adding json:true property parses the JSON to an object for me and ensures that the body is defined
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}`,
    json: true
}, (error, response, body) => {
    //handling errors, if an invalid address is read then body.status is ZERO_RESULTS
    if (error)
        console.error('Error connecting to Google servers')
    else if (body.status === 'ZERO_RESULTS')
        console.error('Unable to locate that address, please try a valid address')
    else if (body.status === 'OVER_QUERY_LIMIT')
        console.error('Google servers say you are making too many queries. To solve this either wait or retrieve a google geocode api key.')
    else if (body.status === 'OK'){
        let geocode = body.results[0]
        let coordinates = geocode.geometry.location

        console.log(`Address: ${geocode.formatted_address}`)
        console.log(`Latitude: ${coordinates.lat}`)
        console.log(`Longitude: ${coordinates.lng}`)
    }
})