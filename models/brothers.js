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

module.exports = Testpanda;

