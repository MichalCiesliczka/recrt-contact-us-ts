import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import App from './core/app';
import ContactUs from './features/contactUs';

import './index.css';

const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App>
      <ContactUs />
    </App>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
