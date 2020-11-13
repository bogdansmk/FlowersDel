import React from 'react';
import {TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import CatalogItem from './CatalogItem';
import AppWrapper from '../AppWrapper/AppWrapper';

const Catalog = ({
  navigation,
  items,
  header,
  headerHeight,
  title,
  bottomNav,
  emptyComponent,
}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={1.0}
      style={[styles.item, index % 2 ? {marginLeft: 15} : null]}
      onPress={() => navigation.navigate('CatalogItem', {item: item})}>
      <CatalogItem item={item} />
    </TouchableOpacity>
  );

  return (
    <AppWrapper
      header={header}
      headerHeight={headerHeight}
      title={title}
      bottomNav={bottomNav}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListEmptyComponent={emptyComponent}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.catalog}
      />
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
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
