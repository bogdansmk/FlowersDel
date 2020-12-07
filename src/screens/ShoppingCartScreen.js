import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Catalog from '../components/Catalog/Catalog';
import {useSelector} from 'react-redux';
import AppButton from '../components/AppButton/AppButton';

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

  const EmptyCart = () => {
    return (
      <View style={styles.emptyCart}>
        <Text>В корзине пока нет товаров</Text>
        <AppButton
          style={styles.button}
          text="Перейти в каталог"
          onPress={() => navigation.navigate('Catalog')}
        />
      </View>
    );
  };

  return (
    <Catalog
      title="Корзина"
      items={items}
      emptyComponent={<EmptyCart />}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
  },
});

export default ShoppingCartScreen;
