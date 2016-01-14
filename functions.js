
var search= require('./tfidf.js')

var date= require('date.js')
function functions(query,classifyed,callback) {
  if(classifyed=="alarm"){
    return callback(null ,(date(query)),sstep)
    }
  else if(classifyed=="call"){

    data=(query.replace('call ', '') );
    return callback(null , data,sstep)
    }
    else if (classifyed=="weather") {
      weather(function ( err, temperature ){
      return callback(null ,temperature,sstep)
      })
    }
    else if (classifyed=="location") {
      var n = query.split(" ");
      return callback(null ,n[n.length - 1],sstep)

    }
    else if(classifyed=="search"){
      test=search.search(query)

      return callback(null , test)
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
