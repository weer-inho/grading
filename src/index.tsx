import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {store} from './store/index';
import { Provider } from 'react-redux';
import { fetchCitiesAction } from './store/api-actions';

store.dispatch(fetchCitiesAction());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
