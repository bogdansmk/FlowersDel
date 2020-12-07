import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Stepper from '../Stepper/Stepper';
import AddToCartButton from '../Catalog/AddToCartButton';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = (props) => {
  const {price, count, name} = props.item;

  return (
    <View style={styles.item}>
      <AddToCartButton
        style={styles.delete}
        item={props.item}
        text={
          <Icon name="close-outline" size={30} color={colors.headingColor} />
        }
      />
      <View style={styles.row}>
        <Image
          style={styles.img}
          source={require('../../assets/images/img6.jpg')}
        />
        <View style={styles.right}>
          <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Вдали от всех живут они в буквенных домах на
            берегу Семантика большого языкового океана.
          </Text>
        </View>
      </View>
      <View style={[styles.row, styles.bottom]}>
        <Stepper value={count} />
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 15,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  bottom: {
    alignItems: 'flex-end',
  },
  img: {
    height: 70,
    width: 70 * 0.9,
    borderRadius: 15,
  },
  price: {
    color: colors.green,
    fontSize: 22,
    fontWeight: '700',
  },
  heading: {
    ...fonts.smallHeading,
    lineHeight: 25,
    width: '95%',
    textAlign: 'left',
  },
  description: {
    ...fonts.text,
  },
  delete: {
    width: 25,
    height: 25,
    paddingHorizontal: 0,
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: colors.darkWhite,
    elevation: 0,
  },
});

export default CartItem;
