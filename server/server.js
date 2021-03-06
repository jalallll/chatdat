const socketio = require('socket.io');
const http = require('http');
const express = require("express")

const router = require("./Components/Router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    console.log("There is a new connetion");

    socket.on('disconnect', ()=>{
        console.log("The user disconnected");
    })
});



app.use(router);

server.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`));
