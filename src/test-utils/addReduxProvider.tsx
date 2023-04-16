import { Provider } from 'react-redux';
import { store } from '../store/store';

const addReduxProvider = (component: JSX.Element) => <Provider store={store}>{component}</Provider>;

export default addReduxProvider;
