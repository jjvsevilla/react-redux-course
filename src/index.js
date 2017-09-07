import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import Main from './components/Main';

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>
);

render(app, document.getElementById('root'));
registerServiceWorker();