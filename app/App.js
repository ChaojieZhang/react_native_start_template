/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {UnauthRoutes, MainRoutes} from './routes/index';

function App() {
  let isLogin = true;
  return (
    <NavigationContainer>
      {isLogin ? <MainRoutes /> : <UnauthRoutes />}
    </NavigationContainer>
  );
}

export default App;
