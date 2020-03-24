// In App.js in a new project
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import FindPasswordScreen from '../screens/FindPassword';
import RegisterScreen from '../screens/Register';
import UserCenterScreen from '../screens/UserCenter';

const Stack = createStackNavigator();

function UnauthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="FindPassword" component={FindPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="UserCenter" component={UserCenterScreen} />
    </Tab.Navigator>
  );
}

export {UnauthRoutes, MainRoutes};
