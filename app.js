const request = require('request')

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=10673%20blue%20nile%20ct',
}, (error, response, body) => {
    let coordinates = JSON.parse(body).results[0].geometry.location
    console.log(coordinates)
})