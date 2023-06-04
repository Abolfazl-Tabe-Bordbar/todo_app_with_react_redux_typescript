import ReactDOM from 'react-dom/client';
import { store } from './store/store'
import { Provider } from 'react-redux'

import './index.css';
import MyContainer from "./components/myContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <MyContainer></MyContainer>
    </Provider>
  </>
);


