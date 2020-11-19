import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

const AppButton = ({text, onPress, type, style}) => {
  const navigation = useNavigation();

  switch (type) {
    case 'link':
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
      );

    case 'backButton':
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.icon}>
          <Icon name="arrow-back" size={30} color={colors.white} />
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          style={[styles.input, styles.button, style]}
          onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '100%',
    // width: '65%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginBottom: 12,
    ...fonts.text,
    color: colors.headingColor,
    //11
  },
  button: {
    // width: 200,
    justifyContent: 'center',
  },
  buttonText: {
    ...fonts.largeText,
    color: colors.headingColor,
    textAlign: 'center',
  },
  link: {
    color: colors.green,
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
});

export default AppButton;
