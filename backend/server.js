const express = require('express');
const db = require('./config/db');
const pizza = require('./models/pizzaModel');
const pizzasRoute = require('./routes/pizzasRoute');

const app = express();

//this is used for body parser
app.use(express.json());
app.use('/api/pizzas', pizzasRoute);

app.get('/', (req, res) => {
  res.send('Server is running');
});

const port = 5000;
app.listen(port, () => 'Server is up and running');
