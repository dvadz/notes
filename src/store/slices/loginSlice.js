import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "app",
  initialState: { currentUser: null },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = null;
    },
  },
});

export { loginSlice };
export const loginReducers = loginSlice.reducer;
