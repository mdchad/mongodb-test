const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrothersSchema = new Schema({
    name: String,
    age: Number,
    dp: String,    
},
{ 
    timestamps: true 
});

const Testpanda = mongoose.model('testpandas', BrothersSchema);

// module.exports = MarioChars;

var brothers = [
    {
        name: 'Irsyad',
        age: 24,
        dp: 'https://s3-ap-southeast-1.amazonaws.com/skarves-product/53567870.jpg'
    },
    {
        name: 'Jazlee',
        age: 24,
        dp: 'https://s3-ap-southeast-1.amazonaws.com/skarves-product/WhatsApp+Image+2018-05-27+at+13.47.43.jpeg            '
    }
];

Testpanda.create(brothers, function (err, brothers) {
  if (err) {}// ...
  // ...
});

module.exports = Testpanda;

