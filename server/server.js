const path = require('path');
const http = require('http');
const express  = require('express');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/messages');
const publicPath  = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server  = http.createServer(app);
var io  = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('new user conn');

  socket.emit('newMessage',generateMessage('Admin','welcome'));

  socket.broadcast. emit('newMessage',generateMessage('Admin','New user joined'));

  socket.on('createMessage',(message,callback) => {
    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback();
  });

  socket.on('createLocationMessage',(coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude,coords.longitude));
  });

  socket.on('disconnect', () =>{
    console.log(
      'user connectres'
    );
  });
});
server.listen(port , () =>{
  console.log(`sevre i on${port}`);
});
