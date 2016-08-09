var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

global.db = require('./models');
//global.db = require('.models/configconfig.json');

var Posts = require('/models')['Posts'];
Posts.sync();

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', handlebars({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/new-submit', function(req, res) {
	res.render('submit');
});

app.get('/:posts:id', function(req, res) {
	res.render('post');
});

app.get('/lyric', function(req, res) {
	res.render('lyric');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Connected to PORT ' + port);
});