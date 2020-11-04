import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const LoginScreen = ({navigation}) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const login = () => {
    //api.login(email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.login}>
      <View style={styles.greeting}>
        <Text style={styles.heading}>Авторизация</Text>
        {/*<Text style={styles.text}>*/}
        {/*  Войдите в свой аккаунт, чтобы начать пользоваться приложением*/}
        {/*</Text>*/}
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Введите Ваш email"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Введите Ваш пароль"
          placeholderTextColor={colors.textColor}
          secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.input, styles.button]} onPress={login}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.link}>Создать новый аккаунт</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    padding: 15,
    paddingBottom: 40,
  },
  greeting: {
    // marginTop: '55%',
    marginVertical: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    ...fonts.heading,
  },
  text: {
    ...fonts.text,
    textAlign: 'center',
  },
  input: {
    height: 45,
    width: '70%',
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
    width: 120,
    justifyContent: 'center',
  },
  buttonText: {...fonts.smallHeading},
  link: {
    color: colors.green,
  },
});

export default LoginScreen;
