import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const WelcomeScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={false}>
      <View style={styles.welcome}>
        <View style={styles.nav}>
          <View style={styles.greeting}>
            <Text style={styles.heading}>Добро пожаловать!</Text>
            <Text style={styles.subheading}>
              Войдите в аккаунт, или зарегистрируйтесь
            </Text>
          </View>
          <View style={styles.navButtons}>
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.buttonText}>Создать аккаунт</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.green,
    // padding: 15,
  },
  nav: {
    position: 'absolute',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    bottom: 0,
    height: 400,
    width: '100%',
    borderRadius: 40,
    padding: 15,
    paddingVertical: 30,
    backgroundColor: colors.white,
  },
  greeting: {
    marginBottom: 40,
  },
  heading: {
    ...fonts.heading,
    fontWeight: '700',
  },
  subheading: {
    ...fonts.largeText,
    textAlign: 'center',
  },
  navButtons: {},
  input: {
    height: 45,
    // width: '70%',
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
    justifyContent: 'center',
  },
  buttonText: {...fonts.smallHeading},
});

export default WelcomeScreen;
