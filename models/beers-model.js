
const { Schema, model } = require('mongoose');

const BeerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    bar_name: {
        type: String,
        required: true,
        default: ''
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = model('Beer', BeerSchema);