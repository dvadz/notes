import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    selectedUser: null,
    isLoggedIn: false,
    searchTerm: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = state.selectedUser;
      state.selectedUser = null;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export { loginSlice };
export const loginReducers = loginSlice.reducer;
export const {
  login,
  logout,
  openModal,
  closeModal,
  selectUser,
  changeSearchTerm,
} = loginSlice.actions;
