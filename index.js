const express = require('express');
const app = express();
const https = require('https');


app.get('/', function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Africa&appid=74da1b2c37607c129cdfb80a15d6fc08&units=metric";
    https.get(url, function(response){
        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const description = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const visibility = weatherData.visibility;
            const icon = weatherData.weather[0].icon;
            const iconURL = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';

            res.write("<h1> the weather is "+description +"</h1>");
            res.write("<h1> the temprature is "+temp +"</h1>");
            res.write("<h1> the visibility is "+visibility +"</h1>");
            res.write('<img src="'+iconURL+'">');
            res.send();

        })
    })
})



app.listen(3000, function(){
    "the server is running on port 3000";
})