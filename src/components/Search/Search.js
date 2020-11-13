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
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchValue}
        value={searchValue}
        autoCorrect={false}
        placeholder="Поиск"
        placeholderTextColor={colors.textColor}
      />
      <Icon
        style={styles.icon}
        name="search-outline"
        size={30}
        color={colors.textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 70,
    // backgroundColor: colors.white,
    // elevation: 2,
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
  input: {
    backgroundColor: colors.darkWhite,
    // elevation: 2,
    // height: 45,
    // borderBottomWidth: 1,
    // borderColor: colors.textColor,
    // paddingHorizontal: 16.5,
    // marginBottom: 12,
    // ...fonts.largeText,
    // color: colors.headingColor,

    height: 45,
    // borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    paddingLeft: 45,
    marginHorizontal: 16.5,
    marginVertical: 12,
    ...fonts.text,
    color: colors.headingColor,
    //11
  },
});

export default Search;
