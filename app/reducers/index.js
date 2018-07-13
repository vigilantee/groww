import { combineReducers } from "redux";
import searchImage from './searchImage';

const reducers = combineReducers({
    searchImage: searchImage
})

export default rootReducer = ( state, action ) => {
    return reducers(state, action);
}