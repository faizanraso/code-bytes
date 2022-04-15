let {Schema, model} = require('mongoose');

let Document = new Schema({
    _id: String,
    data: Object
});

module.exports = model('Document', Document);