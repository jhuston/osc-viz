var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const template = __dirname + '/index.html';

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

http.listen(3000, function(){
  console.log('listening on *:3000');
});
