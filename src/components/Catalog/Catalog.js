import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CatalogItem from './CatalogItem';

const Catalog = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.catalog}>
      <CatalogItem name="Цветы 1" price="249 грн." />
      <CatalogItem name="Цветы 2" price="299 грн." />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catalog: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    // backgroundColor: 'red',
  },
});

export default Catalog;
