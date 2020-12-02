import React from 'react';
import {FlatList, View} from 'react-native';
import SliderItem from './SliderItem';

const Slider = ({images, width}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        renderItem={(img) => <SliderItem image={img} width={width} />}
        keyExtractor={(item, idx) => item.toString() + idx}
      />
    </View>
  );
};

export default Slider;
