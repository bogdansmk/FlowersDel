import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Catalog from '../components/Catalog/Catalog';
import AppButton from '../components/AppButton/AppButton';

const FavouritesScreen = ({navigation}) => {
  const items = useSelector((state) => state.user.favourites);

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

  const EmptyFav = () => {
    return (
      <View style={styles.emptyFav}>
        <Text>В избранном пока ничего нет</Text>
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
      title="Избранное"
      items={items}
      bottomNav={true}
      emptyComponent={<EmptyFav />}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  emptyFav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
  },
});

export default FavouritesScreen;
