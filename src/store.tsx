import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import rootReducer from './rootReducer';
import localMessagesMiddleware from './localMessagesMiddleware';

/* eslint-disable no-underscore-dangle */
/* redux devtools configuration */
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;
/* eslint-enable */

const configureStore = () => {
  // TODO: Make a proper middleware for LS saving.
  const middleware = [localMessagesMiddleware];

  const store = {
    ...createStore(
      rootReducer,
      {},
      composeEnhancers(applyMiddleware(...middleware)),
    ),
  };

  return { store };
};

export default configureStore;
