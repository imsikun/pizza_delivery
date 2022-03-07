import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = pizzaSlice.actions;
export default pizzaSlice.reducer;
