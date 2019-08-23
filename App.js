/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ImageCard from './app/components/ImageCard/ImageCard';
import reducer from './app/reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <ImageCard />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App;
