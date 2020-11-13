import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import AddToFavButton from './AddToFavButton';

const CatalogItem = (props) => {
  const {price, name} = props.item;

  return (
    <View style={styles.item}>
      <View style={styles.img}>
        <ImageBackground
          style={styles.bgImg}
          source={require('../../assets/images/img6.jpg')}>
          <AddToFavButton item={props.item} />
          <Text style={styles.price}>{price}</Text>
        </ImageBackground>
      </View>
      <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    // width: '48%',
    // width: '98%',
    height: 200,
    // backgroundColor: colors.pale,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  img: {
    // height: '80%',
    flex: 1,
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  price: {
    color: colors.green,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'right',
    position: 'absolute',
    width: '100%',
    right: 0,
    bottom: 0,
    paddingHorizontal: 5,
    backgroundColor: colors.headingColor + '6e',
  },
  heading: {
    ...fonts.smallHeading,
    lineHeight: 25,
    padding: 5,
  },
});

export default CatalogItem;
