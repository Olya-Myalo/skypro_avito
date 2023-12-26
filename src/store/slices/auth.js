import { createSlice } from "@reduxjs/toolkit";
const AUTH_KEY = "auth";

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState = {
  access: '',
  refresh: '',
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState;

      state.access = payload.access
      state.refresh = payload.refresh
      state.user = payload.user
      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;