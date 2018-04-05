const request = require('request')

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        //url encode the address like '1000 sesame street => 1000%sesame%street'
        urlAddress = encodeURI(address)

        //making http request to geocode api
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}`,
            json: true
        },(error, response, body)=> {
            if (error)
                reject('Error connecting to Google servers')
            else if (body.status === 'ZERO_RESULTS')
                reject('Unable to locate that address, please try a valid address')
            else if (body.status === 'OVER_QUERY_LIMIT')
                reject('Google servers say you are making too many queries. To solve this either wait or retrieve a google geocode api key.')
            else if (body.status === 'OK'){
                let geocode = body.results[0]
                let coordinates = geocode.geometry.location
                
                //returning latitude and longitude on success
                resolve({
                    address: geocode.formatted_address,
                    latitude: coordinates.lat,
                    longitude: coordinates.lng
                })
            }
        })
    })
    
}

module.exports = {
    geocodeAddress
}

