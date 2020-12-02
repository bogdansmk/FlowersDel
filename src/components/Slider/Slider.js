import React, {useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import SliderItem from './SliderItem';
import SliderPagination from './SliderPagination';

const Slider = ({images, width}) => {
  const [index, setIndex] = useState(0);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewRef = useRef(({changed}) => {
    setIndex(changed[0].index);
  });
  return (
    <View>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        renderItem={(img) => <SliderItem image={img} width={width} />}
        keyExtractor={(item, idx) => item.toString() + idx}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewRef.current}
      />
      <SliderPagination itemCount={images.length} currentIndex={index} />
    </View>
  );
};

export default Slider;
