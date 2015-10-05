var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('default', {
		title: 'Home',
        users: ['Michael', 'Sara', 'Erika']
	});
});

app.get('/me', function(req, res) {
	res.send('@planetoftheweb');
});

app.get('/who/:name?/:title?', function(req, res) {
	var name = req.params.name;
	var title = req.params.title;
	res.send(name + ' was here' + '<br>title: '+title + '</br>');
});

app.get('*', function(req, res) {
	res.send('Bad Route');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});