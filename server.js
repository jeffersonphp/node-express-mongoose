// server.js
var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/pacientes');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' +
	app.get('port'));
});