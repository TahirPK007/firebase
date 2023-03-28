import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import auth from '@react-native-firebase/auth';
import Splash from './Splash';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
