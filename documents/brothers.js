const Testpanda = require('./../models/brothers.js')

let brothers = [
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

let createTestDB = () => Testpanda.create(brothers, (err, brothers) => {
  if (err) {}// ...
  // ...
});

module.exports = createTestDB
