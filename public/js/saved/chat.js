// Creating a New Project 17:27
// Adding Socket.io to an App 19:45 
// Emitting and Listening to Events 17:35
// Emitting and Listening to Events (Solution) 6:22
// Broadcasting Events 15:05


var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'Faza',
    //     text: 'Yup, thats works for me'
    // });

    // socket.emit('createEmail', {
    //     to: 'zulkifli@gmail.com',
    //     text: 'halo apa kabar?'
    // });
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});

// socket.on('newEmail', function(email) {
//     console.log('New Email', email);
// });