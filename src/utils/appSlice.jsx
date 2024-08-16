import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
