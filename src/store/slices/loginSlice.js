import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    isLoginModalOpen: false,
    selectedUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.selectedUser = null;
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
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export { loginSlice };
export const loginReducers = loginSlice.reducer;
