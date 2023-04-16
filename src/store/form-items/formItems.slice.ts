import { createSlice } from '@reduxjs/toolkit';
import { IItem } from '../../models/item.model';

const initialState: IItem[] = [];

export const formItemsSlice = createSlice({
  name: 'formItems',
  initialState,
  reducers: {
    addFormItems: (state, action) => {
      const item = action.payload;
      state.push(item);
    },
  },
});

export const { actions, reducer } = formItemsSlice;
