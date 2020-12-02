import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../res/colors';

const SliderPagination = ({itemCount, currentIndex}) => {
  return (
    <View style={styles.container}>
      {renderIndicator(itemCount, currentIndex)}
    </View>
  );
};

export const renderIndicator = (count, currentIndex) => {
  const indicators = [];

  for (let i = 0; i < count; i++) {
    indicators.push(
      <View
        style={[styles.indicator, i === currentIndex && {...styles.active}]}
        key={i}
      />,
    );
  }
  return indicators;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -50,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: colors.darkWhite,
  },
  active: {
    backgroundColor: colors.orange,
  },
});

export default SliderPagination;
