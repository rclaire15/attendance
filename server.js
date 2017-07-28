//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/index1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index1.html'));
});
app.get('/index2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index2.html'));
});
app.get('/index3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index3.html'));
});
app.get('/lists', function(req, res){
  res.sendFile(path.join(__dirname, 'views/lists.htm'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000 ',app.get('port'));
 });