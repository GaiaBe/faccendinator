import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import choresReducer from './choresSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    chores: choresReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;