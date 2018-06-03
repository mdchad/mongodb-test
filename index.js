const express = require('express')
const app = express()
const Testpanda = require('./models/brothers')
const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect('mongodb://localhost/testpanda');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    mongoose.connection.db.dropDatabase(function(){
        console.log('drop db')
    });
}).on('error', function(error){
    console.log('Connection error:', error);
});

const html = (persons) => {
    let b = []
    persons.forEach(person => {
        b.push(`<h1>I'm ${person.name} and I'm a fucking noob.</h1>
        <img src=${person.dp}>`)
    })
    return (b.join(''))
}

app.get('/', (req, res) => {
    Testpanda.find({}, function(err, testpandas) {
        if (err) 
        {
         throw err;
        }
        res.send(html(testpandas))
      });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))