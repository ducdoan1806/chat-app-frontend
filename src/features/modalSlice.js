// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal.push(action.payload);
    },
    closeModal(state, action) {
      state.modal = state.modal.filter((item) => item.name !== action.payload);
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal.modal;
export default modalSlice;
