const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(3000, '0.0.0.0', () => console.log('Server has started on port 3000'));

const io = socketio(expressServer);

io.on('connect', socket => {
    socket.on('newMessageToServer', data => {
        io.emit('newMessageToClient', data);
    });
});