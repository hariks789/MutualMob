import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import state from './Redux/Reducers/Reducer';

const reducer = combineReducers({state});

const logger = (store) => (next) => (action) => {
  let result = next(action);
  // console.log('next state', store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
