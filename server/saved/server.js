// Creating a New Project 17:27
// Adding Socket.io to an App 19:45 
// Emitting and Listening to Events 17:35
// Emitting and Listening to Events (Solution) 6:22
// Broadcasting Events 15:05

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



    // socket.emit('newMessage', {
    //     from: 'Sydney',
    //     text: 'Jalan-jalan yuk ke austarlia',
    //     createAt: 123
    // });



    // socket.emit('newEmail', {
    //     from: 'officiallFaza@gmail.com',
    //     text: 'ini pesan buat faza',
    //     createAt: 2234
    // });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        // socket.emit from admin text welcome to the chat app
        socket.emit('newMessage', {
            from: 'Admin',
            text: 'Welcome to the chat App',
            createdAt: new Date().getTime()
        });

        socket.broadcast.emit('newMessage', {
            from: 'Admin',
            text: 'New user join',
            createdAt: new Date().getTime()
        })

        // socket.broadcast emit from admin text new user joined


        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // });

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
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