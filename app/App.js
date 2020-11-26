
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
