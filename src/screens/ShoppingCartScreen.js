import React, {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import Cart from '../components/Cart/Cart';

const ShoppingCartScreen = ({navigation}) => {
  const items = useSelector((state) => state.user.cart);

  useLayoutEffect(() => {
    if (items.length) {
      navigation.setOptions({
        tabBarBadge: items.length,
      });
    } else {
      navigation.setOptions({
        tabBarBadge: null,
      });
    }
  }, [navigation, items]);

  return <Cart items={items} navigation={navigation} />;
};

export default ShoppingCartScreen;
