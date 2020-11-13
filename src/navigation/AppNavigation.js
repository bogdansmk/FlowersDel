import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../res/colors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/*<KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>*/}
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{backgroundColor: colors.darkWhite}}
        // sceneContainerStyle={{backgroundColor: colors.orange}}
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
            tabBarLabel: 'Каталог',
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
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarLabel: 'Избранное',
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name={focused ? 'heart' : 'heart-outline'}
                  size={30}
                  color={color}
                />
              );
            },
            tabBarBadge: null,
            tabBarBadgeStyle: {
              backgroundColor: colors.green,
              color: 'red',
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Профиль',
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

export default AppNavigation;
