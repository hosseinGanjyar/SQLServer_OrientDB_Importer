var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
let sqlServer = require('./db/sqlServer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  sqlServer.transport(function () {
    res.json()
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
