import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  loaded: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.currentUser = action.payload;
    },
    getUserFail: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
  },
});
export default userSlice;
export const errorUserSelector = (state) => state.user.error;
export const loadedUserSelector = (state) => state.user.loaded;
export const loadingUserSelector = (state) => state.user.loading;
export const currentUserSelector = (state) => state.user.currentUser;
