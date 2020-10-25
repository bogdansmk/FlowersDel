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
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your password"
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
  login: {
    flex: 1,
    // alignItems: 'center',
  },
  greeting: {
    marginTop: '55%',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.headingColor,
  },
  text: {
    textAlign: 'center',
  },
  input: {
    height: 45,
    width: '65%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.textColor,
    paddingHorizontal: 16.5,
    fontSize: 15,
    color: colors.headingColor,
    marginBottom: 12,
    //11
  },
  button: {
    width: 120,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.headingColor,
    textAlign: 'center',
  },
});

export default LoginScreen;
