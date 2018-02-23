
import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';


const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});


export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  const store = createStore(
    () => {},
    initialState,
    enhancer
  );

  return store;
}
