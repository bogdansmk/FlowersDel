import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import Catalog from '../components/Catalog/Catalog';

const HomeScreen = (props) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <ScrollView>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchValue}
          value={searchValue}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Искать цветы или букеты"
          placeholderTextColor={colors.textColor}
        />
      </View>
      <Catalog />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {},
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginBottom: 12,
    ...fonts.largeText,
    color: colors.headingColor,
  },
});

export default HomeScreen;
