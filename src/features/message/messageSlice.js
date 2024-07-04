import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loaded: false,
  loading: false,
  error: null,
  page: 1,
  pageSize: 10,
};
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getMessage: (state) => {
      state.loading = true;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    getMessageSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.messages = action.payload?.results;
    },
    getMessageFail: (state, action) => {
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
export default messageSlice;
