import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducers';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/root-reducer.js', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
