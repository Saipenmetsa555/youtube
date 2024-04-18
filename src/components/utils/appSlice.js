import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    mobileOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMobileMenu: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
  },
});

export const { toggleMenu, closeMenu, openMobileMenu } = appSlice.actions;

export default appSlice.reducer;
