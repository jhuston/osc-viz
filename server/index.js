var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var osc = require('node-osc');

const template = __dirname + '/index.html';
const oscIn = 33333;
const oscOut = 11111;

app.get('/', function(req, res){
  res.sendFile(template);
});

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

var oscClient = new osc.Client('127.0.0.1', oscOut);
var oscServer = new osc.Server(oscIn, '0.0.0.0');

oscServer.on("message", function (msg, rinfo){
  console.log(msg);
  console.log(rinfo);
  io.emit('chat message', msg);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
