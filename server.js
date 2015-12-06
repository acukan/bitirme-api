// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var classify= require('./classify.js')
var functions= require('./functions.js')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

router.route('/')
router.route('/gettest/:query')


      .get(function(req, res) {


            query = req.params.query;


              classify.classify(query, function ( err, classifyed ){
                functions.functions(query,classifyed, function ( err, functionsReturn ){
                  res.json({
                    action: classifyed,
                    functions:functionsReturn
                  });
                });
              });
});
router.route('/gettest/:query')
