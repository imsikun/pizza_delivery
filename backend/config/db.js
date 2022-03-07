const mongoose = require('mongoose');

var mongoUrl =
  'mongodb+srv://imsikun:imsikun123@pizzasubh.n3xoi.mongodb.net/pizza-delivery';

mongoose.connect(mongoUrl);
var db = mongoose.connection;

db.on('connected', () => {
  console.log('Database connected successfully');
});

db.on('error', () => {
  console.log('Database Connection failed');
});

module.exports = mongoose;
``;
