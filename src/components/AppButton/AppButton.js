import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

const AppButton = ({text, onPress, type, style, size, color, ...props}) => {
  const navigation = useNavigation();

  switch (type) {
    case 'link':
      return (
        <TouchableOpacity style={style} onPress={onPress} {...props}>
          <Text
            style={[
              styles.link,
              size && {fontSize: size},
              color && {color: color},
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      );

    case 'backButton':
      return (
        <TouchableOpacity
          style={[styles.icon, style]}
          onPress={() => navigation.goBack()}
          {...props}>
          <Icon name="arrow-back" size={30} color={colors.darkWhite} />
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          style={[styles.input, style]}
          onPress={onPress}
          {...props}>
          <Text
            style={[
              styles.buttonText,
              size && {fontSize: size},
              color && {color: color},
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    marginBottom: 12,
    ...fonts.text,
    color: colors.headingColor,
    justifyContent: 'center',
    //11
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
