import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friend: null,
  friends: [],
  loaded: false,
  loading: false,
  error: null,
  page: 1,
  pageSize: 10,
  searchQuery: "",
  count: 0,
};
const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    getFriendId: (state, action) => {
      state.friend = state.friends.find((item) => item.id === action.payload);
    },
    getFriend: (state) => {
      state.loading = true;
    },
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    getFriendSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.count = action.payload.count;
      if (state.page === 1) state.friends = action.payload.results;
      else state.friends = [...state.friends, ...action.payload.results];
    },
    getFriendFail: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
    updatePagination(state, action) {
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload.searchQuery;
      state.page = 1; // Reset page on search
    },
  },
});
export default friendSlice;
