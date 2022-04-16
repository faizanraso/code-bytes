require('dotenv').config()
const express = require("express");
const cors = require('cors');
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 3001

const app = express()
app.use(require('cors')())
const server = http.createServer(app)

//mongoose
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

var codeRoom = "";

const io = socketIo(server,{ 
    cors: {
      origin: 'http://localhost:3000',
      methods: ["GET", "POST"]
    } 
});

io.on('connection',(socket)=>{
    socket.on('join', async room =>{
        codeRoom = room
        socket.join(codeRoom);

        socket.on('send-changes', (newCode)=>{
            io.to(codeRoom).emit('receive-changes', newCode);
        });

    });

});

server.listen(PORT, err=> {
    if(err) console.log(err)
})