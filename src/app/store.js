import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/auth/userSlice";
import friendSlice from "../features/userList/friendSlice";
import modalSlice from "../features/modalSlice";
import roomSlice from "../features/room/roomSlice";

const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  auth: authSlice.reducer,
  user: userSlice.reducer,
  friend: friendSlice.reducer,
  room: roomSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
