import React from 'react';
import colors from '../../res/colors';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToShoppingCart} from '../../redux/userReducer';
import fonts from '../../res/fonts';

const AddToCartButton = (props) => {
  const inCart = useSelector((state) => state.user.cart);
  const isInCart = inCart.indexOf(props.item) !== -1;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToShoppingCart(props.item));
  };

  return (
    <TouchableOpacity
      style={[
        styles.input,
        styles.button,
        !props.stepperVal ? {opacity: 0.4} : null,
      ]}
      onPress={addToCart}
      disabled={!props.stepperVal}>
      <Text style={styles.buttonText}>
        {isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    // width: 120,
    justifyContent: 'center',
  },
  buttonText: {...fonts.smallHeading},
});

export default AddToCartButton;
