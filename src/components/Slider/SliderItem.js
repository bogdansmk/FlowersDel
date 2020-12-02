import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const SliderItem = ({image, width}) => {
  return (
    <TouchableOpacity style={{width: width}} activeOpacity={0.9}>
      <Image
        style={styles.image}
        source={require('../../assets/images/img6.jpg')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
});

export default SliderItem;
