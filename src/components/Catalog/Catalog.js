import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import CatalogItem from './CatalogItem';

const Catalog = (props) => {
  const items = [
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
  ];

  const renderItem = ({item}) => (
    <CatalogItem name={item.name} price={item.price} />
  );
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // ListHeaderComponent={Header}
      numColumns={2}
      columnWrapperStyle={styles.catalog}
    />
  );
};

const styles = StyleSheet.create({
  catalog: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
    // backgroundColor: 'red',
  },
});

export default Catalog;
