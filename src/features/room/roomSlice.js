import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  loaded: false,
  loading: false,
  error: null,
  room: null,
  page: 1,
  pageSize: 10,
};
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoom: (state) => {
      state.loading = true;
      state.loaded = false;
    },
    getRoomById: (state, action) => {
      state.room = state.rooms.find(
        (item) => item.id === Number(action.payload)
      );
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
    getRoomSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.rooms = action.payload?.results;
    },
    getRoomFail: (state, action) => {
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
    createRoom: (state) => {
      state.loading = true;
    },
    createRoomSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.room = action.payload?.data?.room;
    },
    createRoomFail: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
  },
});
export default roomSlice;
