const mongoose = require('mongoose');
const Brother = require('../models/brothers')
const chai = require('chai');
const expect = chai.expect;
// Create a new schema that accepts a 'name' object.
// 'name' is a required field
//Create a new collection called 'Name'
const BrotherModel = mongoose.model('testBrother', Brother.brothersSchema);
describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongoose.connect('mongodb://localhost/testBrother');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      mongoose.connection.db.dropDatabase();
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test brother', function() {
    //Save object with 'name' value of 'Mike"
    it('New name saved to test database', function(done) {
      var testBrother = BrotherModel({
            name: 'Irsyad',
            age: 24,
            dp: 'https://s3-ap-southeast-1.amazonaws.com/skarves-product/53567870.jpg'
      });
 
      testBrother.save(done);
    });
    // it('Dont save incorrect format to database', function(done) {
    //   //Attempt to save with wrong info. An error should trigger
    //   var wrongSave = BrotherModel({
    //     notnadffgffgzffgdsgxdfgdxfgxme: 8675656,
    //     ytuiih: 'mgffgf',
    //     dnfbdgnbdgfnbdfgdfg: false
    //   });
    //   wrongSave.save((err, doc) => {
    //     console.log(doc)
    //     if(err) { return done(); }
    //     throw new Error('Should generate error!');
    //   });
    // });
    it('Should retrieve data from test database', function(done) {
      //Look up the 'Mike' object previously saved.
      BrotherModel.find({name: 'Irsyad'}, (err, brothers) => {
        if(err) {throw err;}
        if(brothers.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });
  //After all tests are finished drop database and close connection
  after(function(done){
      mongoose.connection.close(done);
  });
});