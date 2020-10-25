import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import colors from './src/res/colors';
import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('pressed');
      }}>
      <AppNavigator />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default App;
