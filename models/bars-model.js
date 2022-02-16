const { Schema, model } = require('mongoose');

const BarSchema = Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        default: ''
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = model('Bar', BarSchema);