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
  var one = Number(req.body.inputOneIn);
  var two = Number(req.body.inputTwoIn);
  var type = req.body.operation;
  res.write(calculate(one, two, type));
  res.end();
});

app.use(express.static('public'));
