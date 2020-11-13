import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import {useSelector} from 'react-redux';
import Catalog from '../components/Catalog/Catalog';

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
        <TouchableOpacity
          style={[styles.input, styles.button]}
          onPress={() => navigation.navigate('Catalog')}>
          <Text style={styles.buttonText}>Перейти в каталог</Text>
        </TouchableOpacity>
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
  input: {
    height: 45,
    width: '70%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginBottom: 12,
    ...fonts.text,
    color: colors.headingColor,
    //11
  },
  button: {
    justifyContent: 'center',
  },
  buttonText: {...fonts.smallHeading},
});

export default FavouritesScreen;
