const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 5000;
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
    // console.log("A new User Connected", socket.id);
    socket.on('chat-message', (message) => {
        io.emit('message', message)
    })
})


app.use(express.static(path.resolve('public')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

server.listen(port, () => {
    console.log("Sever is Running! @", port);
})