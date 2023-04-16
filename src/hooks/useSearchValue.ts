import useTypedSelector from './useTypedSelector';

const useSearchValue = () => {
  const searchValue = useTypedSelector((state) => state.searchValue.value);
  return { searchValue };
};

export default useSearchValue;
