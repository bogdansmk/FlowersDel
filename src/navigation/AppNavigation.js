import React from 'react';
import {
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../res/colors';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/*<KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>*/}
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{backgroundColor: 'white'}}
        // sceneContainerStyle={styles.navbar}
        lazy={true}
        backBehavior="history"
        tabBarOptions={{
          // activeBackgroundColor: colors.yellow,
          activeTintColor: colors.orange,
          inactiveTintColor: colors.headingColor,
          showLabel: false,
          tabStyle: {
            // borderRadius: 20,
            // backgroundColor: 'red',
            // overflow: 'hidden',
          },
          style: {
            // borderRadius: 25,
            // borderTopWidth: 12,
            // borderTopColor: 'yellow',
            // borderWidth: 12,
            height: 50,
            overflow: 'hidden',
            // backgroundColor: 'yellow',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={30}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={30}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
      {/*</KeyboardAvoidingView>*/}
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false, headerTitle: 'Авторизация'}}
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

const styles = StyleSheet.create({
  navbar: {
    // flex: 1,
    // position: 'absolute',
    // paddingHorizontal: 30,
    // height: 60,
    // backgroundColor: colors.yellow,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
});

export default AppNavigator;
