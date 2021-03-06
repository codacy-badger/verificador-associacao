import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  let devToolsCompose;

  // TODO: verify react-router and devtools middlewares, saga enhancers

  if (process.env.NODE_ENV === ('development')) {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
    devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const compose = devToolsCompose || reduxCompose;

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export {
  configureStore,
};
