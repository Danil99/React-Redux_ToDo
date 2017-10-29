import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import _ from './style.sass';
import App from './containers/AppContainer';

import reducer from './reducer';
import initialState from './store';

const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
