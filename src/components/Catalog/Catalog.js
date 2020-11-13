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
  Dimensions,
} from 'react-native';
import CatalogItem from './CatalogItem';
import colors from '../../res/colors';
import fonts from '../../res/fonts';

const Catalog = ({navigation, items, header, title, emptyComponent}) => {
  const height = Dimensions.get('window').height - 50 - 70;

  // console.log(height);

  const Header = ({title}) => {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={1.0}
      style={[styles.item, index % 2 ? {marginLeft: 15} : null]}
      onPress={() => navigation.navigate('CatalogItem', {item: item})}>
      <CatalogItem item={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      {header ? header : <Header title={title} />}
      <View style={[styles.wrapper, {height}]}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListEmptyComponent={emptyComponent}
          // ListHeaderComponentStyle={styles.header}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.catalog}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // height: '100%',
    // paddingBottom: 125,
    backgroundColor: colors.green,
    // justifyContent: 'center',
    // marginBottom: 55,
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
  wrapper: {
    // height: 500,
    // flexGrow: 0,
    // height: '100%',
    // flex: 1,
    // paddingVertical: 10,
    // justifyContent: 'center',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.darkWhite,
    elevation: 60,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    paddingVertical: 7.5,
  },
  catalog: {
    // height: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingVertical: 30,
    // paddingVertical: 7.5,
    // backgroundColor: colors.yellow,
  },
  item: {
    width: '48%',
    // width: '50%',
    // marginLeft: 0,
    // marginHorizontal: 7.5,
    marginVertical: 7.5,
  },
});

export default Catalog;
