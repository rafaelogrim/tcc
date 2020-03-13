const mongoose = require('mongoose');
const {MONGO_URI} = process.env;

module.exports = () => mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// mongoose.connection.on('connected', () => console.log('Mongoose event', 'connected'));
// mongoose.connection.on('disconnected', () => console.log('Mongoose event', 'disconnected'));
// mongoose.connection.on('reconnected', () => console.log('Mongoose event', 'reconnected'));
// mongoose.connection.on('error', (err) => console.error('Mongoose event', 'error', err));
// mongoose.connection.on('close', () => console.log('Mongoose event', 'close'));
// mongoose.connection.on('timeout', () => console.log('Mongoose event', 'timeout'));
// return mongoose.connection;
