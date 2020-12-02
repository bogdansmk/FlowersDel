import React from 'react';
import colors from '../../res/colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourites} from '../../redux/userReducer';
import Icon from 'react-native-vector-icons/Ionicons';

const AddToFavButton = (props) => {
  const fav = useSelector((state) => state.user.favourites);
  const isFav = fav.indexOf(props.item) !== -1;

  const dispatch = useDispatch();

  const addToFav = () => {
    dispatch(addToFavourites(props.item));
  };

  return (
    <TouchableOpacity onPress={addToFav} style={styles.button}>
      <Icon
        name={isFav ? 'heart' : 'heart-outline'}
        size={30}
        color={isFav ? colors.yellow : colors.darkWhite}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    margin: 5,
  },
});

export default AddToFavButton;
