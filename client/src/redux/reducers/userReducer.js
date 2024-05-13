import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getUsers, getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
