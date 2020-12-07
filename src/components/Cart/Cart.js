import React from 'react';
import {TouchableOpacity, StyleSheet, FlatList, View, Text} from 'react-native';
import AppWrapper from '../AppWrapper/AppWrapper';
import AppButton from '../AppButton/AppButton';
import CartItem from './CartItem';

const Cart = ({navigation, items}) => {
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

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={1.0}
      style={styles.item}
      onPress={() => navigation.navigate('CartItem', {item: item})}>
      <CartItem item={item} />
    </TouchableOpacity>
  );

  return (
    <AppWrapper title="Корзина" backButton={false}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyCart />}
        contentContainerStyle={styles.content}
      />
    </AppWrapper>
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
  content: {
    flexGrow: 1,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
  },
  item: {
    width: '100%',
    marginVertical: 7.5,
  },
});

export default Cart;
