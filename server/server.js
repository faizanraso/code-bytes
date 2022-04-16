require('dotenv').config()
const express = require("express");
const cors = require('cors');
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 3001

const app = express()
const server = http.createServer(app)

//mongoose
const mongoose = require("mongoose");
const Document = require('./models/Document');
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

var codeRoom = "";

const io = socketIo(server, { 
    cors: {
      origin: 'http://localhost:3000',
      methods: ["GET", "POST"]
    } 
});

io.on('connection',(socket)=>{
    socket.on('join', async room =>{
        codeRoom = room
        socket.join(codeRoom);

        // load initial data to editor
        const document = await findOrCreateDocument(codeRoom);
        socket.emit('initial-code', document.data); 

        //receieve changes from client
        socket.on('send-changes', (newCode)=>{
            io.to(codeRoom).emit('receive-changes', newCode); // display changes to all active users in that room
        });

        //save changes to document
        socket.on('save-changes', (newCode) =>{
            Document.updateOne({_id: codeRoom}, {data: newCode}, (err, res) => {
                return
            });
        })
    }); 
});

server.listen(PORT, err=> {
    if(err) console.log(err)
})

async function findOrCreateDocument(id) {
    if (id == null) return
    const document = await Document.findById(id);
    if (document) return document;
    return await Document.create({ _id: id, data: "" });
  }