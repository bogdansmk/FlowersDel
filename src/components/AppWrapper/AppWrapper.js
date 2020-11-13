import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';

const AppHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const AppWrapper = ({header, title, children}) => {
  const height = Dimensions.get('window').height - 50 - 70; // window - bottomNav - header

  return (
    <View style={styles.screen}>
      {header ? header : <AppHeader title={title} />}
      <View style={[styles.wrapper, {height}]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.green,
  },
  wrapper: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.darkWhite,
    elevation: 60,
    overflow: 'hidden',
  },
  header: {
    height: 70,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    ...fonts.smallHeading,
    color: colors.white,
    fontWeight: '700',
  },
});

export default AppWrapper;
