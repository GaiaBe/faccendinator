import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isShow: boolean;
}

const initialState: ModalState = {
  isShow: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isShow = true;
    },
    onCloseModal: (state) => {
      state.isShow = false
    },
  },
});

export const { onCloseModal, onOpenModal } = modalSlice.actions;
export default modalSlice.reducer;