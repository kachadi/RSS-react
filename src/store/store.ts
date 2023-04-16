import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import { reducer as searchValueReducer } from './search-value/searchValue.slice';
import { reducer as formItemsReducer } from './form-items/formItems.slice';

const reducers = combineReducers({
  searchValue: searchValueReducer,
  formItems: formItemsReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
