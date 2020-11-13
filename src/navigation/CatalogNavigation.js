import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CatalogScreen from '../screens/CatalogScreen';
import CatalogItemScreen from '../screens/CatalogItemScreen';
import AddToFavButton from '../components/Catalog/AddToFavButton';

const Stack = createStackNavigator();

const CatalogNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog">
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          headerShown: false,
          headerTitle: 'Каталог',
        }}
      />
      <Stack.Screen
        name="CatalogItem"
        component={CatalogItemScreen}
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 0,
          },
          headerRight: () => <AddToFavButton />,
          headerRightContainerStyle: {
            paddingHorizontal: 15,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CatalogNavigation;
