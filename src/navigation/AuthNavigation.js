import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false, headerTitle: 'Добро пожаловать'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            // headerShown: false,
            headerTitle: 'Авторизация',
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            // headerShown: false,
            title: 'Регистрация',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
