require('dotenv').config()
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 3001

const app = express()
const server = http.createServer(app)

//mongoose
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

var codeRoom = "";

const io = socketIo(server,{ 
    cors: {
      origin: 'http://localhost:3000'
    } 
});

io.on('connection',(socket)=>{
    socket.on('join', (room)=>{
        codeRoom = room
        socket.join(codeRoom);
    });

    socket.on('send-changes', (code)=>{
        console.log(code);
    });
    
});

server.listen(PORT, err=> {
    if(err) console.log(err)
})