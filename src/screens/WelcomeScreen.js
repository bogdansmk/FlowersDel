import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import AppButton from '../components/AppButton/AppButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.welcome}>
      <View style={styles.nav}>
        <View style={styles.greeting}>
          <Text style={styles.heading}>Добро пожаловать!</Text>
          <Text style={styles.subheading}>
            Войдите в аккаунт, или зарегистрируйтесь
          </Text>
        </View>
        <View>
          <AppButton
            text="Войти"
            onPress={() => navigation.navigate('Login')}
          />
          <AppButton
            text="Создать аккаунт"
            onPress={() => navigation.navigate('Registration')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.green,
  },
  nav: {
    justifyContent: 'center',
    bottom: 0,
    height: 400,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
    paddingVertical: 30,
    backgroundColor: colors.darkWhite,
    elevation: 60,
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
});

export default WelcomeScreen;
