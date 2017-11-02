var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      console.log('SERVER error: ', err)
      res.sendStatus(500);
    } else {
      console.log('SERVER: ', data);
      res.json(data);
    }
  });
});

// app.post('/', function(req, res) {


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
