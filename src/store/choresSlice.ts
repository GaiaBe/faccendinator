import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Assignment } from '../types';

interface ChoresState {
  assignments: Assignment[];
}

const initialState: ChoresState = {
  assignments: [],
};

const choresSlice = createSlice({
  name: 'chores',
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    },
    completeAssignment: (state, action: PayloadAction<string>) => {
      const assignment = state.assignments.find(a => a.id === action.payload);
      if (assignment) {
        assignment.completed = true;
        assignment.completedAt = new Date().toISOString();
      }
    },
    resetAssignments: (state) => {
      state.assignments = [];
    },
  },
});

export const { addAssignment, completeAssignment, resetAssignments } = choresSlice.actions;
export default choresSlice.reducer;