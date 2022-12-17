import {
  Middleware,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/Index.Reducer';

const bindMiddleware = (middleware: Middleware<unknown, any, any>) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

const store = createStore(reducers, bindMiddleware(thunk));
export default store;
