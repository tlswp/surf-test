import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './features/users/api';
import { usersSlice } from './features/users/slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
setupListeners(store.dispatch);
