import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Navbar} from './src/components/Navbar/Navbar';
import colors from './src/res/colors';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="height"
          enabled={false}>
          {/*<ScrollView style={styles.content}>*/}
          <LoginScreen />
          {/*</ScrollView>*/}
        </KeyboardAvoidingView>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 15,
  },
});

export default App;
