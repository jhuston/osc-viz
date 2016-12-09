var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var osc = require('node-osc');

const template = 'index.html';
const oscIn = 33333;
const oscOut = 11111;
const oscClient = new osc.Client('127.0.0.1', oscOut);
const oscServer = new osc.Server(oscIn, '0.0.0.0');

// Express routes
app.use(express.static( __dirname + '/../dist'));
app.get('/', function(req, res){
  res.sendFile(template);
});

//IO events
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// OSC events
oscServer.on("message", function (msg, rinfo){
  console.log(msg);
  console.log(rinfo);
  //forward the message to the browser
  io.emit('from supercollider', msg);
});

// start the socket.io server
http.listen(3000, function(){
  console.log('listening on *:3000');
});
