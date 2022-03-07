const express = require('express');
const db = require('./config/db');
const pizza = require('./models/pizzaModel');

const app = express();

//this is used for body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.get('/getPizzas', (req, res) => {
  pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
const port = 5000;
app.listen(port, () => 'Server is up and running');
