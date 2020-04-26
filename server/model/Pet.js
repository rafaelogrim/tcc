const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

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

schema.plugin(random);

module.exports = mongoose.connection.model('Pet', schema);
