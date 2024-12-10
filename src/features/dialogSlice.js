import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    isOpen: false,
    dialogType: null, // Stores the component type
  },
  reducers: {
    toggleDialog: (state, action) => {
      state.isOpen = !state.isOpen;
      state.dialogType = action.payload; // Store the component type
    },
  },
});

export const { toggleDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
