const request = require('request')

//handles the callback for request()
let geocodeAddressCallback = (error, response, body) => {
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
}

let geocodeAddress = (address) => {
    
    //url encode the address for http request
    urlAddress = encodeURI(address)

    //making request, note that json: true property returns the json already parsed
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}`,
        json: true
    }, geocodeAddressCallback)
}

module.exports = {
    geocodeAddress
}

