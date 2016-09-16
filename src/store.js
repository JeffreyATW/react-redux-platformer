/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, compose } from 'redux';
import initialState from './initialState';
import reducer from './reducer';

// Setup of Redux Dev Tools Chrome extension, for dev environment only.
let devTools = f => f;
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
}

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(
  reducer,
  initialState,
  compose(
    devTools
  )
);

export default store;

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line global-require
    store.replaceReducer(require('./reducer').default);
  });
}
