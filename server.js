// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var classify= require('./classify.js')
var functions= require('./functions.js')
/*
burda gerekli kütüphaneleri ekliyoruz
express burda api frameworku bir bak ara buna
body parser ekrana gerekli şeyleri basmayı planlıyoruz ama gerekli değil dursun

classify
functionsjs
kendi sayfalarında açıklanıyor

*/
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8080;        // set our port
//uygulamanın kullanacığı portu temsil ediyor
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
//burda uyglamanın rootunda göstirelecek mesajı veriyoruz

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
//api rooutumuz burda aşağıdaki kodlarımız api'a erişiecek
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

router.route('/')
router.route('/gettest')
//api dan devam her yeni eklediğimuz rooute ekleniyor burda
//her eklediğimiz route devamını getiriyor


      .get(function(req, res) {

        //get  fonksiyonunu kullanıcaz burda onu belirttik

            query =(req.param('query').replace('query=', '')); //query'i alıyoruz burda
              classify.classify(query, function ( err, classifyed ){//artık classify ediyoruz bu diye
                functions.functions(query,classifyed, function ( err, functionsReturn ){// ordan aldıgımız datayı functionsa yolluyoruz sayfasına bak
                  res.json({//burda da karşıya cevap veriyoruz
                    action: classifyed,
                    query:query,
                    functions:functionsReturn
                  });
                });
              });
});
router.route('/gettest/:query')
