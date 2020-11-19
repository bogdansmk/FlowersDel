import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import {useDispatch} from 'react-redux';
import {login} from '../redux/authReducer';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import AppButton from '../components/AppButton/AppButton';

const LoginScreen = ({navigation}) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const auth = () => {
    dispatch(login());
    //api.login(email, password);
  };

  return (
    <AppWrapper title="Авторизация">
      <ScrollView contentContainerStyle={styles.login}>
        <View style={styles.greeting}>
          <Text style={styles.heading}>Войдите в свой аккаунт</Text>
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
          <AppButton style={styles.button} text="Войти" onPress={auth} />
          <AppButton
            text="Создать новый аккаунт"
            onPress={() => navigation.navigate('Registration')}
            type="link"
          />
        </View>
      </ScrollView>
    </AppWrapper>
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
  },
});

export default LoginScreen;
