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

const LoginScreen = (props) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const login = () => {
    //api.login(email, password);
  };

  return (
    <View style={styles.login}>
      <View style={styles.greeting}>
        <Text style={styles.heading}>Добро пожаловать!</Text>
        <Text style={styles.text}>
          Создайте бесплатно аккаунт, чтобы начать пользоваться приложением
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your password"
          placeholderTextColor={colors.textColor}
          secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.input, styles.button]} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {},
  greeting: {
    marginTop: '55%',
    marginBottom: 40,
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
    width: '65%',
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
});

export default LoginScreen;
