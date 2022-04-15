require('dotenv').config()
const mongoose = require("mongoose");
const Document = require("./models/Document");
const uri = process.env.MONGO_URI;

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

const io = require('socket.io')(3001, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    socket.on('get-document', async id => {
        socket.join(id);
        socket.on('send-changes', (code) => {
            socket.broadcast.to(id).emit('receive-changes', code);
        });
    });
});
