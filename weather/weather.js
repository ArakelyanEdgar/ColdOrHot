const request = require('request')


let weatherRequestCallback = (error, response, body, callback) => {
    if (error)
        callback('Difficulty connecting to DarkSky servers')
    else if (body.code === 400)
        callback('The given location is invalid')
    else if(!error && response.statusCode === 200){
        callback(undefined, body)
    }
}


let weatherRequest = (key, latitude, longitude, callback) => {
   
    request({
        url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => weatherRequestCallback(error, response, body, callback))
}

module.exports = {
    weatherRequest
}