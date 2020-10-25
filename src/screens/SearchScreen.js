import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const SearchScreen = (props) => {
  let [value, setValue] = useState('');

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        placeholder="Search the shops or flowers"
        placeholderTextColor={colors.textColor}
      />
    </View>
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

export default SearchScreen;
