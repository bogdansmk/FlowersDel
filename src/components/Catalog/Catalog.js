import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import CatalogItem from './CatalogItem';
import colors from '../../res/colors';
import CatalogNavigation from '../../navigation/CatalogNavigation';
import fonts from '../../res/fonts';

const Catalog = ({navigation}) => {
  let [searchValue, setSearchValue] = useState('');

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
    <TouchableOpacity
      activeOpacity={1.0}
      style={{width: '48%'}}
      onPress={() => navigation.navigate('CatalogItem', {name: item.name})}>
      <CatalogItem name={item.name} price={item.price} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.home}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchValue}
          value={searchValue}
          autoCorrect={false}
          placeholder="Поиск"
          placeholderTextColor={colors.textColor}
        />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // ListHeaderComponent={Header}
        numColumns={2}
        columnWrapperStyle={styles.catalog}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    paddingBottom: 55,
    // marginBottom: 55,
  },
  search: {},
  input: {
    // height: 45,
    // borderBottomWidth: 1,
    // borderColor: colors.textColor,
    // paddingHorizontal: 16.5,
    // marginBottom: 12,
    // ...fonts.largeText,
    // color: colors.headingColor,

    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginHorizontal: 16.5,
    marginVertical: 12,
    ...fonts.text,
    color: colors.headingColor,
    //11
  },
  catalog: {
    // flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
    // backgroundColor: colors.darkWhite,
  },
});

export default Catalog;
