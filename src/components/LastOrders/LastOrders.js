import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  FlatList,
  VirtualizedList,
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import LastOrdersItem from './LastOrdersItem';
import UserProfile from '../UserProfile/UserProfile';

const LastOrders = (props) => {
  const hasOrders = true;
  const orders = [
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
  ];

  const renderItem = ({item}) => {
    return <LastOrdersItem order={item} />;
  };

  const Header = () => <UserProfile />;

  return (
    <View style={styles.lastOrders}>
      <Text style={styles.heading}>Ваши последние заказы</Text>
      <View>
        {hasOrders ? (
          <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // ListHeaderComponent={Header}
            style={styles.lastOrdersItems}
          />
        ) : (
          <Text style={styles.message}>У Вас пока нет заказов</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lastOrders: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // overflow: 'hidden',
    // paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 30,
    // backgroundColor: '#e4e4e4',
    backgroundColor: colors.white,
  },
  lastOrdersItems: {
    paddingHorizontal: 15,
  },
  heading: {
    ...fonts.smallHeading,
    fontWeight: '700',
    marginBottom: 10,
  },
  message: {
    padding: 15,
    textAlign: 'center',
    ...fonts.text,
  },
  // noMargins: {
  //   margin: 0,
  // },
});

export default LastOrders;
