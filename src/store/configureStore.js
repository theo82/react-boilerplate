import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReduser from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Configuring the store
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReduser
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
