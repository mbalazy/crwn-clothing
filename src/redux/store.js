import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducers';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';

export default preloadedState => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(monitorReducersEnhancer);
  }
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/root-reducer.js', () =>
      store.replaceReducer(rootReducer)
    );
  }

  const persistor = persistStore(store);
  return { store, persistor };
};
