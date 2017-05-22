// Creating a New Project 17:27

const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function(socket) {
    console.log('New user connected');

    // U/ tampilan pertama kali masuk
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat App',
        createdAt: new Date().getTime()
    });
    // ini u/ bila ada user masuk
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    // ini buat pesan baru
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        // ini buat models pesan
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', function() {
        console.log('User was disconnected');
    });
});

server.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
})