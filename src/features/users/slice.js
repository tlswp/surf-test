import { createSlice } from '@reduxjs/toolkit';

const initialState = { users: [] };

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((item) => item.id !== id);
    },
    addUser: (state, action) => {
      let isAdded = false;
      for (const userItem of state.users) {
        if (userItem.id === action.payload.id) isAdded = true;
      }
      if (!isAdded) state.users.push(action.payload);
    },
  },
});

export const { addUser, deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
