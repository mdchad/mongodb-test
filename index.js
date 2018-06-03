const express = require('express')
const app = express()
const Testpanda = require('./models/brothers')
const mongoose = require('mongoose');
const Brothers = require('./models/brothers')

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect('mongodb://localhost/testpanda');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

const brothers = new Brothers({
    name: 'Irsyad',
    age: 24,
    dp: 'https://s3-ap-southeast-1.amazonaws.com/skarves-product/53567870.jpg',    
})

brothers.save()


app.get('/', (req, res) => {
    Testpanda.find({}, function(err, testpandas) {
        if (err) 
        {
         throw err;
        }
        res.json(testpandas)
      });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))