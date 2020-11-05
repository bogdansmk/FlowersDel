import React from 'react';
import {Text, Image, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../res/colors';
import CatalogItemScreen from '../screens/CatalogItemScreen';
import HomeScreen from '../screens/HomeScreen';
import Catalog from '../components/Catalog/Catalog';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const CatalogNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog">
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: false,
          headerTitle: 'Каталог',
        }}
      />
      <Stack.Screen
        name="CatalogItem"
        component={CatalogItemScreen}
        // options={
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          // headerTitle: ({route}) => ({title: route.params.name}),
          headerTitleStyle: {
            fontSize: 0,
          },
          // headerLeft: () => (
          //   // <Icon name="arrow-back" size={30} color={colors.white} />
          // ),
          // headerLeftContainerStyle: {
          //   paddingHorizontal: 15,
          // },
          headerRight: () => (
            <Icon name="heart-outline" size={30} color={colors.white} />
          ),
          headerRightContainerStyle: {
            paddingHorizontal: 15,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default CatalogNavigation;
