import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import colors from './src/res/colors';
import AppNavigator, {AppStackNavigator} from './src/navigation/AppNavigation';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  let isLoggedIn = false;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('pressed');
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled={true}>
        {isLoggedIn ? <AppNavigator /> : <AppStackNavigator />}
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
