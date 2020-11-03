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

const RegistrationScreen = ({navigation}) => {
  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [number, setNumber] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [repeatedPassword, setRepeatedPassword] = useState('');

  const register = () => {
    //api.register(email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.registration}>
      <View style={styles.regMessage}>
        <Text style={styles.heading}>Создание аккаунта</Text>
        {/*<Text style={styles.text}>Давайте создадим новый аккаунт</Text>*/}
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          autoCorrect={false}
          placeholder="Имя"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          autoCorrect={false}
          placeholder="Фамилия"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="phone-pad"
          placeholder="Номер телефона"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.textColor}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Пароль"
          placeholderTextColor={colors.textColor}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setRepeatedPassword}
          value={repeatedPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Повторите свой пароль"
          placeholderTextColor={colors.textColor}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.input, styles.button]}
          onPress={register}>
          <Text style={styles.buttonText}>Создать аккаунт</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>У меня уже есть аккаунт</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  registration: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 40,
  },
  regMessage: {
    marginVertical: 20,
  },
  form: {
    width: '90%',
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
    width: 200,
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
});

export default RegistrationScreen;
