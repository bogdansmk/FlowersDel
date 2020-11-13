import 'react-native-gesture-handler';
import React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import colors from './src/res/colors';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={true}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.green} />
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </KeyboardAvoidingView>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
