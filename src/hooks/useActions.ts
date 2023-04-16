import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { actions as searchValueActions } from '../store/search-value/searchValue.slice';
import { actions as formItemsActions } from '../store/form-items/formItems.slice';

const rootActions = {
  ...searchValueActions,
  ...formItemsActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
