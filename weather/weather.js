const request = require('request')

//darkSky api key
let key = '5cc20ef634c8d2497e706301c44c0f5c'
//wrapper for the http request to dark sky api
let weatherRequest = (latitude, longitude) => {
    
    //making http request to dark sky api
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            if (error)
                reject('Difficulty connecting to DarkSky servers')
            else if (body.code === 400)
                reject('The given location is invalid')
            else if(!error && response.statusCode === 200){
                resolve(body)
            }
        })
    })
}

module.exports = {
    weatherRequest
}