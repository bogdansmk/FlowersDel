import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToShoppingCart} from '../../redux/userReducer';
import AppButton from '../AppButton/AppButton';
import colors from '../../res/colors';

const AddToCartButton = (props) => {
  const inCart = useSelector((state) => state.user.cart);
  const isInCart = inCart.indexOf(props.item) !== -1;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToShoppingCart(props.item));
  };

  return (
    <AppButton
      style={[
        styles.button,
        !props.stepperVal && {opacity: 0.4},
        isInCart && {backgroundColor: colors.orange},
      ]}
      color={colors.darkWhite}
      text={isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
      onPress={addToCart}
      disabled={!props.stepperVal}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: '70%',
    backgroundColor: colors.green,
    borderWidth: 0,
    elevation: 5,
  },
});

export default AddToCartButton;
