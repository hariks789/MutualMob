/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './Router';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
