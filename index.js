const express = require('express')
const app = express()
const Brothers = require('./models/brothers')
const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect('mongodb://localhost/brother');
mongoose.connection.once('open', () => {
    console.log('Connection has been made, now make fireworks...');
}).on('error', (error) => {
    console.log('Connection error:', error);
});

const html = (persons) => {
    let b = ''
    persons.forEach(person => {
        b += `<h1>I'm ${person.name} and I'm a fucking noob.</h1>
        <img src=${person.dp}>`
    })
    return b
}

app.get('/', (req, res) => {
    Brothers.brother.find({}, function(err, brothers) {
        if (err) 
        {
         throw err;
        }
        res.send(html(brothers))
      });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))