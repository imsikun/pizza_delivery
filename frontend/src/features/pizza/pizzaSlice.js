import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pizzaService from './pizzaService';
const initialState = {
  pizzas: [],
  cartItem: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get all pizza
export const getAllPizza = createAsyncThunk(
  'pizzas/getAll',
  async (_, thunkApi) => {
    try {
      return await pizzaService.getPizza();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPizza.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPizza.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pizzas = action.payload;
      })
      .addCase(getAllPizza.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = pizzaSlice.actions;
export default pizzaSlice.reducer;
