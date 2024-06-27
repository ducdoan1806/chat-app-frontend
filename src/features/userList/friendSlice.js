import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  error: null,
  loading: false,
  loaded: false,
};
const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    getFriend: (state) => {
      state.loading = true;
    },
    addFriend: (state, action) => {
      state.friends.results.push(action.payload);
    },
    getFriendSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.friends = action.payload;
    },
    getFriendFail: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
  },
});
export default friendSlice;
export const errorFriendSelector = (state) => state.friend.error;
export const loadedFriendSelector = (state) => state.friend.loaded;
export const loadingFriendSelector = (state) => state.friend.loading;
export const friendsSelector = (state) => state.friend.friends;
