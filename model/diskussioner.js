const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diskussionerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('diskussioner', diskussionerSchema);