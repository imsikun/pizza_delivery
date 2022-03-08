const express = require('express');
// const { getPizza } = require('../controllers/pizzaController');
const router = express.Router();
const pizza = require('../models/pizzaModel');

router.get('/getallpizzas', async (req, res) => {
  try {
    const pizzas = await pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// router.route('/').get(getPizza)

module.exports = router;
