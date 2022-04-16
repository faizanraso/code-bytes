let {Schema, model} = require('mongoose');

let Document = new Schema({
    _id: String,
    data: String
});

module.exports = model('Document', Document);