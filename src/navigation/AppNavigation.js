import React from 'react';
import {Image, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../res/colors';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/*<KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>*/}
      <Tab.Navigator
        initialRouteName="Login"
        backBehavior="history"
        lazy={true}
        // sceneContainerStyle={styles.navbar}
        tabBarOptions={{
          activeBackgroundColor: colors.yellow,
          // keyboardHidesTabBar: true,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({focused, color, size}) => {
              return <Image source={require('../assets/icons/home.png')} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({focused, color, size}) => {
              return <Image source={require('../assets/icons/search.png')} />;
            },
          }}
        />
      </Tab.Navigator>
      {/*</KeyboardAvoidingView>*/}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 30,
    height: 60,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AppNavigator;
