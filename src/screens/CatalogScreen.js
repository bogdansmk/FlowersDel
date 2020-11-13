import React from 'react';
import Search from '../components/Search/Search';
import {useSelector} from 'react-redux';
import Catalog from '../components/Catalog/Catalog';

const CatalogScreen = ({navigation}) => {
  const items = useSelector((state) => state.catalog.items);

  return (
    <Catalog
      items={items}
      header={<Search />}
      bottomNav={true}
      navigation={navigation}
    />
  );
};

export default CatalogScreen;
