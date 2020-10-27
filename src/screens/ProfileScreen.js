import React, {useState} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import UserProfile from '../components/UserProfile';

const ProfileScreen = (props) => {
  return (
    <ScrollView style={styles.profile}>
      <UserProfile />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
