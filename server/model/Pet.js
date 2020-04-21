const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    size: String,
    vaccinated: Boolean,
    castrated: Boolean,
    dewormed: Boolean,
    age: String,
    gender: String,
    description: String,
    avatar: {
        type: String,
        default: 'nopet.png'
    }
}, {
    timestamps: true,
});

module.exports = mongoose.connection.model('Pet', schema);
