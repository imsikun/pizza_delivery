const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    varients: [],
    prizes: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);

const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzaModel;
