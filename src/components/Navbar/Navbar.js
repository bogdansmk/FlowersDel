import React from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {NavbarItem} from './NavbarItem';
import colors from '../../res/colors';

export const Navbar = () => {
  return (
    // <KeyboardAvoidingView enable={false}>
    <SafeAreaView style={styles.navbar}>
      {/*<View style={styles.navbar}>*/}
      <NavbarItem name="Home" icon={require('../../assets/icons/home.png')} />
      <NavbarItem
        name="Search"
        icon={require('../../assets/icons/search.png')}
      />
      <NavbarItem
        name="Store"
        icon={require('../../assets/icons/shopping-cart.png')}
      />
      <NavbarItem
        name="Profile"
        icon={require('../../assets/icons/user.png')}
      />
    </SafeAreaView>
    // </KeyboardAvoidingView>
    // </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 30,
    height: 60,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
