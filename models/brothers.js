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

const Brother = mongoose.model('brothers', BrothersSchema);

// module.exports = MarioChars;

module.exports.brother = Brother;
module.exports.brothersSchema = BrothersSchema;

