const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://nbuzzer:77mongoDB77@fec-availability-mdczx.mongodb.net/FEC', { useNewUrlParser: true }, (err) => {
  if (err) { throw err; };
  console.log('Availability Database connection was successful.')
});

module.exports = db;