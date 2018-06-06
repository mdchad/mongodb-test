const createDB = require('./documents/brothers')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/brother');
mongoose.connection.once('open', () => {
    console.log('Connection has been made, now make fireworks...');
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close();
        console.log('drop db')
    });
    createDB()
}).on('error', (error) => {
    console.log('Connection error:', error);
});