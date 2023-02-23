import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigation/ScreenNavigation';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
