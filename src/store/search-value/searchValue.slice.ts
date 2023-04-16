import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    addSearchValueToStore(state, { payload: searchValue }) {
      state.value = searchValue;
    },
  },
});

export const { actions, reducer } = searchValueSlice;
