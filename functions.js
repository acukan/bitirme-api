
var search= require('./tfidf.js')

var date= require('date.js')
function functions(query,classifyed,callback) {
  if(classifyed=="alarm"){
    step=0;
    return callback(null ,(date(query)),step)
    }
  else if(classifyed=="call"){

    data=(query.replace('query=call ', '') );
    step=0;
    return callback(null , data,step)
    }
    else if (classifyed=="weather") {
      weather(function ( err, temperature ){
      step=0;
      return callback(null ,temperature,step)
      })
    }
    else if(classifyed=="search"){
      test=search.search(query)
      console.log(test);
      step=0;
      return callback(null , test,step)
    }
}


function weather(callback) {


    var config = {
        units: "metric",
        apiKey: "7c2ec1abf1b45603d1b372375c27ec86",
        debug: process.env.NODE_ENV === 'development'
    };
  var simpleWeather = require("simple-weather")(config);

  simpleWeather["v2.5"].current.byCityName("istanbul").then(function(response) {
    console.log("Current Weather of Istanbul is");
    console.log("Temperature:", response.main.temp, "Celcius");
    return callback(null ,response.main.temp )
  }).catch(function(err) {
    console.error(err.stack);
    });
}




module.exports = {
  functions
}
