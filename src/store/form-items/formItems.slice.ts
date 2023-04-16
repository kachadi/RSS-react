import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/item.model';

const initialState: IItem[] = [];

export const formItemsSlice = createSlice({
  name: 'formItems',
  initialState,
  reducers: {
  },
});

export const { actions, reducer } = formItemsSlice;
