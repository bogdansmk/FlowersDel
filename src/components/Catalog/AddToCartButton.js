import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToShoppingCart} from '../../redux/userReducer';
import AppButton from '../AppButton/AppButton';
import colors from '../../res/colors';

const AddToCartButton = (props) => {
  const inCart = useSelector((state) => state.user.cart);
  const isInCart = inCart.some((item) => item.id === props.item.id);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToShoppingCart({...props.item, count: props.stepperVal}));
  };

  return (
    <AppButton
      style={[
        styles.button,
        isInCart && {backgroundColor: colors.orange},
        props.style,
      ]}
      color={props.color || colors.darkWhite}
      text={
        props.text || (isInCart ? 'Удалить из корзины' : 'Добавить в корзину')
      }
      onPress={addToCart}
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
