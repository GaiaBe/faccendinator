import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from '../types';

interface UserState {
  users: User[];
  setupComplete: boolean;
}

interface RemoveDayPayload {
  userId: string;
  dayToRemove: number;
}

const initialState: UserState = {
  users: [],
  setupComplete: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
    removeDayFromUser: (state, action: PayloadAction<RemoveDayPayload>) => {
      const user = state.users.find((user) => user.id === action.payload.userId)
      
      if (user) {
        user.daysHome = user.daysHome.filter((day) => day !== action.payload.dayToRemove)
      }
    },
    completeSetup: (state) => {
      state.setupComplete = true;
    },
  },
});

export const { addUser, updateUser, removeUser, completeSetup, removeDayFromUser } = userSlice.actions;
export default userSlice.reducer;