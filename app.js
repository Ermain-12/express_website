var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();

var port = 3000 || process.env.port;

var routes = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');

// app.set('port', 3000 || process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view enginer', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/index', about);
app.use('/contact', contact);

// app.get('/', function(req, res){
 //   res.setHeader('Content type', 'text/plain');
//    res.send('Hello Node...');
// });


app.listen(port, function(req, res){
    console.log('Server listening on port: ' + port);
});
