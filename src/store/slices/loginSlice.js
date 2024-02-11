import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { currentUser: null, isLoginModalOpen: false },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = null;
    },
    openModal: (state, action) => {
      state.isLoginModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isLoginModalOpen = false;
    },
  },
});

export { loginSlice };
export const loginReducers = loginSlice.reducer;
