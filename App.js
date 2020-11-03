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

const App = () => {
  let isLoggedIn = false;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('pressed');
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={true}>
        {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  // app: {
  //   flex: 1,
  //   backgroundColor: colors.white,
  // },
  // content: {
  //   flex: 1,
  //   paddingHorizontal: 15,
  // },
});

export default App;
