const request = require('request')

//handler for the request callback
let weatherRequestCallback = (error, response, body, callback) => {
    if (error)
        callback('Difficulty connecting to DarkSky servers')
    else if (body.code === 400)
        callback('The given location is invalid')
    else if(!error && response.statusCode === 200){
        callback(undefined, body)
    }
}


//darkSky api key
let key = '5cc20ef634c8d2497e706301c44c0f5c'
//wrapper for the http request to dark sky api
let weatherRequest = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => weatherRequestCallback(error, response, body, callback))
}

module.exports = {
    weatherRequest
}