const express = require('express');

const app = express();

//this is used for body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

const port = 5000;
app.listen(port, () => 'Server is up and running');
