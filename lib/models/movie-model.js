const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        default: 'drama'
    },
    leadActor: {
        type: String
    },
    academyAward: {
        type: Boolean
    }
});

module.exports = mongoose.model('Movie', movie);