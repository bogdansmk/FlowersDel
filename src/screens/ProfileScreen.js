import React, {useState} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import UserProfile from '../components/UserProfile';
import LastOrders from '../components/LastOrders/LastOrders';

const ProfileScreen = (props) => {
  return (
    <ScrollView style={styles.profile}>
      <UserProfile />
      <LastOrders />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    padding: 15,
  },
});

export default ProfileScreen;
