var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
var PORT = process.env.NODE_ENV || 3001;
app.engine('handlebars', expressHandlebars({defaultLayout: 'list'}));
app.set('view engine', handlebars);

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'lsutiger6',
  database: 'wishlist_db'
});

app.get('/', function(req, res) {
  connection.query("SELECT * FROM list", function(err, results) {
    if(err) {
      throw err;
    }
    var data = {
      list: results
    }
    res.render('list', data);
  })
});

app.post('/', function(req, res) {
  var mySQLQuery = "INSERT INTO list (list)"
})