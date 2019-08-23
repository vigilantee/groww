import { createStore, compose, applyMiddleware } from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import reducers from './app/reducers';


const configureStore = () => {
  const store = createStore(reducers,
    {},
    compose(
      applyMiddleware(thunk)
    ));
  return store;
};

export default configureStore;
