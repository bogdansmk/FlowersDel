import React, {useLayoutEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import Catalog from '../components/Catalog/Catalog';
import {useSelector} from 'react-redux';
import {log} from 'react-native-reanimated';

const ShoppingCartScreen = ({navigation}) => {
  const items = useSelector((state) => state.user.cart);

  console.log(items);

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
      title="Корзина"
      items={items}
      navigation={navigation}
      emptyComponent={<EmptyCart />}
    />
  );
};

const styles = StyleSheet.create({
  emptyCart: {
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

export default ShoppingCartScreen;
