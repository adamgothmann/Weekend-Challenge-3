var express = require('express');
var app = express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var calculate = require('../modules/calculate.js');

var server = app.listen(process.env.PORT || 8080, function() {
  console.log('in port 3000');
});

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});



app.post('/pathPost', urlencodedParser, function( req, res ){
  // var one = req.body.inputOneIn;
  // var two = req.body.inputTwoIn;
  // var type = req.body.operation;
  // console.log( 'req.body - x: ' + req.body.x + ', y: ' + req.body.y + ', operator: ' + req.body.operation );
 var result = calculate(req.body);
 console.log(req.body);
 console.log(result);
 res.send(result.toString());
});

app.use(express.static('public'));
