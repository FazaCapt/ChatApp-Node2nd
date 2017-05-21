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

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
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