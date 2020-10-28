import React, {useState} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import LastOrdersItem from './LastOrdersItem';

const LastOrders = (props) => {
  const hasOrders = true;
  const orders = [
    {
      id: 1,
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: 2,
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: 3,
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
  ];

  return (
    <View>
      <Text style={styles.heading}>Ваши последние заказы</Text>
      <View style={styles.lastOrders}>
        {hasOrders ? (
          orders.map((order) => <LastOrdersItem order={order} key={order.id} />)
        ) : (
          <Text style={styles.message}>У Вас пока нет заказов</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lastOrders: {
    borderWidth: 1,
    borderColor: colors.textColor,
    borderRadius: 25,
    overflow: 'hidden',
    // backgroundColor: colors.textColor,
  },
  heading: {
    ...fonts.smallHeading,
    textAlign: 'left',
  },
  message: {
    padding: 15,
    textAlign: 'center',
    ...fonts.text,
  },
  noMargins: {
    margin: 0,
  },
});

export default LastOrders;
