import axios from 'axios';

const API_URL = '/api/pizzas';

const getPizza = async () => {
  const response = await axios.get(`${API_URL}/getallpizzas`);
  return response.data;
};

const pizzaService = {
  getPizza,
};

export default pizzaService;
