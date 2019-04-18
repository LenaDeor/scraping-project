const mongoose = require('mongoose');
const url = 'mongodb://localhost/productdb';

mongoose.connect(url, { useNewUrlParser: true }, err => {
  if (err) throw new Error(err);
  else console.log('Database connected'); //eslint-disable-line
});

module.exports = mongoose;