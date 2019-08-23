import { combineReducers } from 'redux';
import searchImage from './searchImage';

const reducers = combineReducers({
  searchImage
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
