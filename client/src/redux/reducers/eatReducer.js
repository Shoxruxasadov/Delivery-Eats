import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eatsAll: [],
  drinks: [],
  pizza: [],
  burgers: [],
  sweets: [],
};

export const eatSlice = createSlice({
  name: "eats",
  initialState,
  reducers: {
    getAllEats: (state, action) => {
      state.eatsAll = action.payload;
    },
    getDrinks: (state, action) => {
      state.drinks = action.payload;
    },
    getPizza: (state, action) => {
      state.pizza = action.payload;
    },
    getBurgers: (state, action) => {
      state.burgers = action.payload;
    },
    getSweets: (state, action) => {
      state.sweets = action.payload;
    },
  },
});

export const { getAllEats, getDrinks, getPizza, getBurgers, getSweets } = eatSlice.actions;

export default eatSlice.reducer;
