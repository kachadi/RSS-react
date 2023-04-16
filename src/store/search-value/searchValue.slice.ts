import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/item.model';

const initialState: IItem[] = [];

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
  },
});

export const { actions, reducer } = searchValueSlice;
