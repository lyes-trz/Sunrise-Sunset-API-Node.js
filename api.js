
var request = require('request');

 
request('https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235', function(error, response, body){
      if (!error && response.statusCode == 200) {
           var parsedData = JSON.parse(body);
           console.log("sunrise : ");
           console.log(parsedData["city_info"]["sunrise"]);

           console.log("sunset : ");
           console.log(parsedData["city_info"]["sunset"]);
      }
        
});