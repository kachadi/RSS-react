import useTypedSelector from './useTypedSelector';

const useFormItems = () => {
  const formItems = useTypedSelector((state) => state.formItems);
  return { formItems };
};

export default useFormItems;
