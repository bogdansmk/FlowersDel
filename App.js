import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import colors from './src/res/colors';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={true}>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // app: {
  // flex: 1,
  // backgroundColor: colors.white,
  // },
  // content: {
  //   flex: 1,
  //   paddingHorizontal: 15,
  // },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
