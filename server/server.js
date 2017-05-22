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

    socket.emit('newMessage', {
        from: 'Sydney',
        text: 'Jalan-jalan yuk ke austarlia',
        createAt: 123
    });


    // socket.emit('newEmail', {
    //     from: 'officiallFaza@gmail.com',
    //     text: 'ini pesan buat faza',
    //     createAt: 2234
    // });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('disconnect', function() {
        console.log('User was disconnected');
    });
});

server.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
})






// console.log(__dirname + '/../public');
// // Output: 
// // /Users/fazafahamsyah/Desktop/node-chat-app/server./../public
// console.log(publicPath);