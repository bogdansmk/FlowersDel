import React, {useState} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';

const LastOrdersItem = ({order}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.img} />
      <View style={styles.info}>
        <View style={styles.firstRow}>
          <Text style={styles.heading}>{order.name}</Text>
          <Text style={styles.status}>{order.status}</Text>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.price}>{order.price}</Text>
          <Text style={styles.data}>{order.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
    width: '100%',
    height: 75,
    flexDirection: 'row',
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderRadius: 10,
    borderColor: colors.textColor,
    overflow: 'hidden',
    // backgroundColor: colors.white,
  },
  img: {
    height: '100%',
    width: 100,
    backgroundColor: colors.orange,
  },
  info: {
    padding: 5,
    paddingRight: 10,
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  heading: {
    ...fonts.largeText,
  },
  status: {
    ...fonts.smallText,
    lineHeight: 20,
  },
  secondRow: {
    // paddingRight: 5,
    flex: 1,
    // width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  price: {
    color: colors.green,
    fontSize: 20,
    fontWeight: '700',
  },
  data: {
    ...fonts.text,
  },
});

export default LastOrdersItem;
